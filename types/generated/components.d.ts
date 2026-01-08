import type { Schema, Struct } from '@strapi/strapi';

export interface BlogTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'monitor';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlogTextImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_text_images';
  info: {
    displayName: 'Text Image';
    icon: 'monitor';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface BlogVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_video_blocks';
  info: {
    displayName: 'Video Block';
    icon: 'monitor';
  };
  attributes: {
    caption: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'monitor';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeCatalyst extends Struct.ComponentSchema {
  collectionName: 'components_home_catalysts';
  info: {
    displayName: 'Catalyst';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_home_section_headers';
  info: {
    displayName: 'Section Header';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'monitor';
  };
  attributes: {
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.text-block': BlogTextBlock;
      'blog.text-image': BlogTextImage;
      'blog.video-block': BlogVideoBlock;
      'footer.social-links': FooterSocialLinks;
      'home.catalyst': HomeCatalyst;
      'home.section-header': HomeSectionHeader;
      'navigation.menu-item': NavigationMenuItem;
    }
  }
}
