import * as React from 'react';
import cn from 'classnames';

import { useTranslate, tKeys } from 'services/i18n';
import { Preview } from 'shared/view/components';

import { StylesProps, provideStyles } from './Product.style';
import { AfricaIcon, SecondPlaceIcon } from './icons';
import logo0xImg from './imgs/0x_logo.png';

type ProductType = keyof typeof tKeys.sections.products;

interface IProps {
  type: ProductType;
}

function Product(props: IProps & StylesProps) {
  const { classes, type } = props;
  const { t } = useTranslate();

  const headerByType: Record<ProductType, () => React.ReactNode> = {
    hackathon0x: () => (
      <>
        <img className={classes.title} src={logo0xImg} />
        <div className={classes.subtitle}>Hackathon winner</div>
        <SecondPlaceIcon className={classes.icon} />
      </>
    ),
    chamaNetwork: () => <AfricaIcon className={classes.icon} />,
  };

  const link = t(tKeys.sections.products[type].link.getKey());

  return (
    <div className={classes.root}>
      <div className={cn(classes.header, { [classes[type]]: true })}>{headerByType[type]()}</div>
      <div className={classes.preview}>
        <Preview
          title={t(tKeys.sections.products[type].title.getKey())}
          description={t(tKeys.sections.products[type].description.getKey())}
          moreLink={link}
          isComingSoon={!link}
        />
      </div>
    </div>
  );
}

export default provideStyles(Product);
