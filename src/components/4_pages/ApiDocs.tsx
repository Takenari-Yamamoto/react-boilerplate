import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export const ApiDocs = () => {
  return (
    <div>
      <SwaggerUI url={`${process.env.REACT_APP_BASE_URL}/sample.yaml`} />
    </div>
  );
};
