'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MinusCircle, PlusCircle } from 'lucide-react';

export default function QuantityCounter({ quantity, onCounter }: any) {
  function updateQuantity(action: string) {
    if (action === '-' && quantity > 1) {
      onCounter(quantity - 1);
    } else if (action === '+') {
      onCounter(quantity + 1);
    }
  }

  return (
    <div className='flex items-center'>
      <Button className='p-2' onClick={() => updateQuantity('-')}>
        <MinusCircle />
      </Button>

      <div className='font-bold px-4 py-1 mx-2 rounded bg-gray-100'>{quantity}</div>

      <Button className='p-2' onClick={() => updateQuantity('+')}>
        <PlusCircle />
      </Button>
    </div>
  );
}
