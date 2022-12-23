import Joi from 'joi';

const titleLabel = 'title';
const descriptionLabel = 'description';
const authorLabel = 'author';

const options = {
    errors: {
        wrap: {
            label: ''
        }
    }
};

const quoteBodySchema = Joi.object({
    title: Joi.string().required().min(3).label(titleLabel),
    description: Joi.string().label(descriptionLabel).allow(''),
    author: Joi.string().required().min(3).label(authorLabel),
});

function createErrorBody(code, description) {
    return { success: false, code: code, description: description };
}

export default function validateQuoteSchema(value) {
    const { error, value: result } = quoteBodySchema.validate(value, options);

    if (error === undefined) {
        result.success = true;
        return result;
    } else {
        const reason = error.details[0];
        switch (reason.context.label) {
            case titleLabel:
                return createErrorBody(1001, reason.message);
            case authorLabel:
                return createErrorBody(1002, reason.message);
            default:
                return createErrorBody(5000, 'unknown error');
        }
    }
}