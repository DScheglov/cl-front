function FetchError(response) {
  this.name = this.constructor.name;
  this.message = response.statusText || 'Fetch Error';
  this.code = response.status;
  this.response = response;
  this.stack = (new Error()).stack;
}

FetchError.reject = response => Promise.reject(
  new FetchError(response)
);

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;


export default FetchError;
