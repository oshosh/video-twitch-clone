import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PropsWithChildren } from 'react';

interface HintProps {
  label: string;
  asChild?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

export const Hint = ({ label, children, asChild, side, align }: PropsWithChildren<HintProps>) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent className='text-black bg-white' side={side} align={align}>
          <p className='font-semibold'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
