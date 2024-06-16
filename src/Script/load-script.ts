import ScriptBuilder, { BuildProvider } from './ScriptBuilder';

async function load(canvas: HTMLCanvasElement): Promise<ScriptBuilder> {
    const builder = new ScriptBuilder(canvas);

    return new Promise((resolve) => {
        import('../../script/*.ts').then(function (scripts: Record<string, {default: BuildProvider}>) {
            for (let scriptId of Object.keys(scripts)) {
                builder.add(scriptId, scripts[scriptId].default);
            }

            resolve(builder);
        });
    });
}

export { load }
