import React from 'react';
import useReveal from '../hooks/useReveal';

// wrapper that fades its children in on scroll, delay is in ms (used to stagger the cards)
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
