/* eslint-disable no-fallthrough */
import randomShit from 'randomstring';

export default function generate(level, readability, answers, isSaving) {

    let password;

    switch (Number(level)) {

        case (1): {
            password = randomShit.generate({
                length: 8,
                readable: readability
            })
            break;
        }

        case (2): {
            password = randomShit.generate({
                length: 12,
                readable: readability
            })
            break;
        }

        case (3): {
            password = randomShit.generate({
                length: 24,
                readable: readability
            })
            break;
        }

        case (4): {
            password = randomShit.generate({
                length: 36,
                readable: readability
            })
            break;
        }

        default: {
            console.log("How did we get here")
        }

    }

    console.log(password)
    return {
        result: true,
        generatedPassword: password
    }
    
}


