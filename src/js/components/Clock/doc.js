import { describe, PropTypes } from 'react-desc';

import { genericProps } from '../../utils/prop-types';
import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Clock => {
  const DocumentedClock = describe(Clock)
    .availableAt(getAvailableAtBadge('Clock', 'Visualization'))
    .description('A clock with timezone awareness.')
    .usage(
      `import { Clock } from 'grommet';
<Clock />`,
    )
    .intrinsicElement(['div', 'svg']);

  DocumentedClock.propTypes = {
    ...genericProps,
    hourLimit: PropTypes.oneOf([12, 24, '12', '24'])
      .description('Whether to roll over the hours after 12 or after 24.')
      .defaultValue(24),
    onChange: PropTypes.func.description(
      `If the clock is running, this function will be called with the
      current time value each time it changes.`,
    ),
    precision: PropTypes.oneOf(['hours', 'minutes', 'seconds'])
      .description('How precise a time to represent.')
      .defaultValue('seconds'),
    run: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['backward', 'forward']),
    ])
      .description(
        `Whether the clock should actively adjust time or be fixed to the
      time specified. 'backward' could be used as a countdown timer.`,
      )
      .defaultValue('forward'),
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
      ]),
      PropTypes.string,
    ])
      .description(
        `Size for both Analog and Digital Clocks. For Analog,
      there's also 'huge', that's equal to 'xxlarge' and exists
      for backwards compatibility`,
      )
      .defaultValue('medium'),
    time: PropTypes.string.description(
      `ISO8601 time or duration. For example: 'PT8H12M23S',
      'T08:12:23', or '2015-02-22T08:12:23'. Any included date
      portion will be ignored. If not provided, the
      current browser time will be used.`,
    ),
    type: PropTypes.oneOf(['analog', 'digital'])
      .description('What type of visualization to show.')
      .defaultValue('analog'),
  };

  return DocumentedClock;
};

export const themeDoc = {
  'clock.analog.extend': {
    description: 'Any additional style for the Analog Clock.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'clock.analog.hour.color': {
    description: 'The color of the hour hand.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: light-2, light: dark-3 }',
  },
  'clock.analog.hour.shape': {
    description: 'The shape of the hour hand',
    type: 'string',
    defaultValue: 'round',
  },
  'clock.analog.hour.size': {
    description: 'The length of the hour hand.',
    type: 'string',
    defaultValue: '24px',
  },
  'clock.analog.hour.width': {
    description: 'The thickness of the hour hand',
    type: 'string',
    defaultValue: '8px',
  },
  'clock.analog.minute.color': {
    description: 'The color of the minute hand.',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: light-4, light: dark-3 }',
  },
  'clock.analog.minute.shape': {
    description: 'The shape of the minute hand.',
    type: 'string',
    defaultValue: 'round',
  },
  'clock.analog.minute.size': {
    description: 'The length of the minute hand.',
    type: 'string',
    defaultValue: '12px',
  },
  'clock.analog.minute.width': {
    description: 'The thickness of the minute hand.',
    type: 'string',
    defaultValue: '4px',
  },
  'clock.analog.second.color': {
    description: 'The color of the seconds hand',
    type: 'string | { dark: string, light: string }',
    defaultValue: '{ dark: accent-1, light: accent-1 }',
  },
  'clock.analog.second.shape': {
    description: 'The shape of the seconds hand.',
    type: 'string',
    defaultValue: 'round',
  },
  'clock.analog.second.size': {
    description: 'The length of the seconds hand.',
    type: 'string',
    defaultValue: '10px',
  },
  'clock.analog.second.width': {
    description: 'The thickness of the seconds hand.',
    type: 'string',
    defaultValue: '3px',
  },
  'clock.analog.size.xsmall': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '48px',
  },
  'clock.analog.size.small': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '72px',
  },
  'clock.analog.size.medium': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '96px',
  },
  'clock.analog.size.large': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '144px',
  },
  'clock.analog.size.xlarge': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '216px',
  },
  'clock.analog.size.xxlarge': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '288px',
  },
  'clock.analog.size.huge': {
    description: 'The whole size of the Analog Clock',
    type: 'string',
    defaultValue: '288px',
  },
};
