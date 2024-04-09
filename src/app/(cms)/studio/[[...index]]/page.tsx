'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';
import React from 'react';

export default function Studio () {
  return <NextStudio config={config} />;
};
