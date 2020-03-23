import { init } from "@rematch/core";
import { language } from '../models/language'


const store = init({
    models: {
        language,
    }
});

export { store };