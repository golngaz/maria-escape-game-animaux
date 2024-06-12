import ScriptBuilder, { BuildProvider } from '../src/ScriptBuilder';
import index from './index';
import bank from './bank';
import canard from './canard';
import lion from './lion';
import lion2 from './lion2';

const scripts: Record<string, BuildProvider> = {
    index,
    bank,
    canard,
    lion,
    lion2,
}

function load(canvas: HTMLCanvasElement): ScriptBuilder {
    const builder = new ScriptBuilder(canvas);

    builder.add(scripts.index);
    builder.add(scripts.bank);
    builder.add(scripts.canard);
    builder.add(scripts.lion);
    builder.add(scripts.lion2);

    return builder
}

export { load }
