import React from 'react';

export const parseLineBreaks = (text) => {
    return text.split('\n').map((item, key) => {
      return <p key={key}>{item}</p>
    });
}