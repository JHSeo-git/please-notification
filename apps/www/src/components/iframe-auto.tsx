'use client';

import * as React from 'react';
import { mergeRefs } from 'react-merge-refs';

type IframeAutoProps = React.IframeHTMLAttributes<HTMLIFrameElement>;
export const IframeAuto = React.forwardRef<HTMLIFrameElement, IframeAutoProps>(
  ({ title, onLoad: propOnLoad, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLIFrameElement>(null);

    const handleIframeHeight = React.useCallback(() => {
      if (ref?.current) {
        const iframe = ref.current;
        if (iframe) {
          iframe.style.height =
            (iframe.contentWindow?.document.documentElement.getBoundingClientRect().height ?? 0) +
            5 +
            'px';
        }
      }
    }, [ref]);

    React.useEffect(() => {
      handleIframeHeight();

      window.addEventListener('resize', handleIframeHeight);

      return () => {
        window.removeEventListener('resize', handleIframeHeight);
      };
    }, [handleIframeHeight]);

    return (
      <iframe
        ref={mergeRefs([ref, forwardedRef])}
        title={title}
        onLoad={(e) => {
          handleIframeHeight();
          propOnLoad?.(e);
        }}
        {...props}
      />
    );
  }
);
IframeAuto.displayName = 'IframeAuto';
