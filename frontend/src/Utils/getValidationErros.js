export default function getValidationErrors(err) {
    const validationErrors = {}

    if (err.inner.length === 0) {
        validationErrors[err.path] = err.message
    } else {
        err.inner.forEach(error => {
            validationErrors[error.path] = error.message
        })
    }

    return validationErrors
}