import { task } from 'gulp';
import { cleanTask, buildConfig } from '../utils';

import { coverageFile } from './coverage';

/** Deletes the dist/ directory. */
export const cleanDist = cleanTask(buildConfig.outputDir);

export const cleanCoverage = cleanTask(coverageFile);
