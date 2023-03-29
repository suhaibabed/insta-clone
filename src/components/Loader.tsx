import { FC } from 'react';

const Loader: FC = () => (
  <div className="flex content-center">
    <div className="border w-6 h-6 text-red-500" role="status" />
  </div>
);

export default Loader;
