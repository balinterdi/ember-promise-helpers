import AwaitHelper from './await';

export default AwaitHelper.extend({
  compute(params, hash) {
    const maybePromise = params[0];
    return this.ensureLatestPromise(maybePromise, (promise) => {
      promise.then(() => {
        this.setValue(null, promise);
      }).catch((reason) => {
        this.setValue(reason, promise);
      });
    });
  }
});
