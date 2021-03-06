import * as React from 'react';
import Dotdotdot from 'react-dotdotdot';

import { useTranslatedDate } from 'services/i18n';
import { Adaptive } from 'services/adaptability';
import { Picture } from 'shared/view/elements';
import { IEvent } from 'shared/types/models';

import { StylesProps, provideStyles } from './EventCard.style';

interface IProps {
  event: IEvent;
}

function EventCard(props: IProps & StylesProps) {
  const { classes, event } = props;
  const { image1x, image2x, eventName, location, startDate, finishDate } = event;
  const date = useTranslatedDate({ from: startDate, to: finishDate });
  return (
    <div className={classes.root}>
      <Picture
        fullWidth
        className={classes.image}
        alt={eventName}
        title={`${eventName} - Akropolis`}
        type="image/png"
        x1={image1x}
        x2={image2x}
      />
      <div className={classes.curtain} />
      <div className={classes.content}>
        <div className={classes.title}>
          <Adaptive to="sm"><Dotdotdot key={eventName} clamp={2}>{eventName}</Dotdotdot></Adaptive>
          <Adaptive from="sm"><Dotdotdot key={eventName} clamp={3}>{eventName}</Dotdotdot></Adaptive>
        </div>
        <div className={classes.location}>{location}</div>
        <div className={classes.date}>{date}</div>
      </div>
    </div>
  );
}

export default provideStyles(EventCard);
