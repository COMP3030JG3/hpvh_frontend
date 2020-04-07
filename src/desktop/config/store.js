import { init } from "@rematch/core";
import { language, my } from '../models'


const store = init({
    models: {
        language,
        my
    }
});

export { store };