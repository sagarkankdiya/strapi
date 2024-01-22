import type { Schema, Attribute } from '@strapi/strapi';

export interface ResubleComponentsImage extends Schema.Component {
  collectionName: 'components_resuble_components_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'resuble-components.image': ResubleComponentsImage;
    }
  }
}
