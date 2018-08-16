const response = ctx => (res) => {
    ctx.body = res;
};

const responseId = ctx => (res) => {
    ctx.body = res._id; // eslint-disable-line no-underscore-dangle
};

const responseError = ctx => (err) => {
    ctx.status = 500;
    ctx.body = err;
};

const respondWithResult = (res) => {
    return entity => res.status(200).json(entity);
};

const list = model => (req, res) => {
    console.log('req.params', req.params);
    console.log('req.query', req.query);

    return model.find({})
        .then(respondWithResult(res));
};


const find = Model => ctx => Model.findOne({ _id: ctx.params.id })
    .then(response(ctx))
    .catch(responseError(ctx));

const removeOne = Model => ctx => Model.findOneAndRemove({ _id: ctx.params.id })
    .then(responseId(ctx))
    .catch(responseError(ctx));

const create = Model => (ctx) => {
    const user = new Model(ctx.request.body);
    return user.save()
        .then(response(ctx))
        .catch(responseError(ctx));
};

export {
    list,
    find,
    removeOne,
    create,
    response,
    responseError
};
