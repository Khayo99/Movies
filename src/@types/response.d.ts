enum OperationStatus {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

type ResponseDefaultApi = {
  operationStatus: OperationStatus;
  message: string;
};

type ResponseData<T> = {
  operationStatus: OperationStatus;
  message: string;
  data: T;
};
