import Joi from 'joi';

const titleLabel = 'title';
const descriptionLabel = 'description';
const authorLabel = 'author';

const quoteBodySchema = Joi.object({
    title: Joi.string().required().label(titleLabel),
    description: Joi.string().label(descriptionLabel).allow(''),
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
            case titleLabel:
                return createErrorBody('1001', 'title is required');
            case authorLabel:
                return createErrorBody('1003', 'author is required');
            default:
                return createErrorBody('5000', 'unknown error');
        }
    }
}