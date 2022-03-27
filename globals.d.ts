//
// Copyright 2022 Joona Piirainen
// MIT License
//

import {
  $Internal,
  askInternal,
  cdInternal,
  fsInternal,
  noThrowInternal,
  rmrfInternal,
} from "./index.ts";

declare global {
  const $: $Internal;
  const cd: typeof cdInternal;
  const ask: typeof askInternal;
  const fs: typeof fsInternal;
  const rmrf: typeof rmrfInternal;
  const noThrow: typeof noThrowInternal;
}
