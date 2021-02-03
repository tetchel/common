export type InputOrOutput = Readonly<{
    description: string;
    required: boolean;
    default?: string;
}>

export type InputsOutputs = Readonly<{
    [key: string]: InputOrOutput;
}>

export type InputOutputEntries = [string, InputOrOutput][];

export type ActionYml = Readonly<{
    name: string;
    description: string;
    inputs?: InputsOutputs;
    outputs?: InputsOutputs;
    runs: {
        using: string;
        main: string;
    };
}>
