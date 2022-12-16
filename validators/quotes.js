import Joi from 'joi';

const descriptionLabel = 'description';
const authorLabel = 'author';

const quoteBodySchema = Joi.object({
    description: Joi.string().required().label(descriptionLabel),
    author: Joi.string().required().label(authorLabel),
});

function createErrorBody(code, description) {
    return { success: false, code: code, description: description };
}

export default function validateQuoteSchema(value) {
    const { error, value: result } = quoteBodySchema.validate(value);

    if (error === undefined) {
        result.success = true;
        return result;
    } else {
        switch (error.details[0].context.label) {
            case descriptionLabel:
                return createErrorBody('1001', 'description is required');
            case authorLabel:
                return createErrorBody('1002', 'author is required');
            default:
                return createErrorBody('5000', 'unknown error');
        }
    }
}