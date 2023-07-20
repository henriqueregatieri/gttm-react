import { URL_YOUTUBE } from 'helpers/utils';
import React, { useEffect } from 'react';

export const Youtube: React.FC = () => {
  useEffect(() => {
    window.location.replace(URL_YOUTUBE);
  });
  return null;
};
