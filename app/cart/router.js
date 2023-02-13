'use client';

import { useRouter } from 'next/navigation';

export default function RouterHandler() {
  const router = useRouter();
  return router.refresh();
}
