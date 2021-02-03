
import * as ghCore from "@actions/core";
import * as ghIO from "@actions/io";
import * as ghExec from "@actions/exec";
import * as path from "path";

import { Inputs } from "./inputs";
import { hash }  from "./hash";

async function moveBundleFile(bundleFilePath: string): Promise<string> {
    const bundleFileName = path.basename(bundleFilePath);
    const bundleFileDir = path.dirname(bundleFilePath);

    const backupPath = path.join(bundleFileDir, bundleFileName + ".backup");
    ghCore.info(`Move ${bundleFilePath} to ${backupPath}`);
    await ghIO.mv(bundleFilePath, backupPath);
    return backupPath;
}

function getInputs(): Readonly<{
    bundleCmd: string,
    bundleFile: string,
    workDir: string | undefined,
}> {
    const workdirInput = ghCore.getInput(Inputs.WORKING_DIRECTORY);
    const workDir: string | undefined = (workdirInput != null && workdirInput != "") ? workdirInput : undefined;
    if (workDir) {
        ghCore.info(`Working directory is ${workDir}`)
    }

    const bundleCmd = ghCore.getInput(Inputs.BUNDLE_COMMAND, { required: true });
    let bundleFileInput = ghCore.getInput(Inputs.BUNDLE_FILE, { required: true });

    if (workDir) {
        bundleFileInput = path.join(workDir, bundleFileInput);
    }

    const bundleFile = bundleFileInput;
    // ghCore.info(`Bundle file is ${bundleFile}`);

    return {
        bundleCmd, bundleFile, workDir,
    };
}

async function run() {
    const { bundleCmd, bundleFile, workDir } = getInputs();

    const bundleFileHash = await hash(bundleFile);
    await moveBundleFile(bundleFile);

    await ghExec.exec(bundleCmd, undefined, { cwd: workDir });
    const newBundleFileHash = await hash(bundleFile);

    ghCore.info(`Comparing hashes...`);
    ghCore.info(`Committed hash: ${bundleFileHash}`);
    ghCore.info(`Generated hash: ${newBundleFileHash}`);

    if (bundleFileHash !== newBundleFileHash) {
        throw new Error(`Hashes did not match. Run "${bundleCmd}" to update your bundle.`);
    }
    ghCore.info(`Hashes matched!`);
}

run()
.catch(ghCore.setFailed);
