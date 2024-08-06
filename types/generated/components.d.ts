import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogMetaDataBlogMetaData extends Schema.Component {
  collectionName: 'components_blog_meta_data_blog_meta_data';
  info: {
    displayName: 'BlogMetaData';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keywords: Attribute.String;
    ogtitle: Attribute.String;
    ogurl: Attribute.String;
    ogimage: Attribute.String;
    ogdescription: Attribute.String;
    author: Attribute.String;
    date: Attribute.Date;
    authorurl: Attribute.String;
  };
}

export interface ConsultUsConsultus extends Schema.Component {
  collectionName: 'components_consult_us_consultuses';
  info: {
    displayName: 'CONSULTUS';
  };
  attributes: {
    type: Attribute.String;
  };
}

export interface CustomImageCustomimage extends Schema.Component {
  collectionName: 'components_custom_image_customimages';
  info: {
    displayName: 'CUSTOMIMAGE';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    alt: Attribute.String;
    value: Attribute.String;
  };
}

export interface H3HeadingsH3Headings extends Schema.Component {
  collectionName: 'components_h3_headings_h3_headings';
  info: {
    displayName: 'H3HEADINGS';
    icon: 'quote';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'IMAGE';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.String;
  };
}

export interface MainHeadingMainheading extends Schema.Component {
  collectionName: 'components_main_heading_mainheadings';
  info: {
    displayName: 'MAINHEADING';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface ParagraphParagraph extends Schema.Component {
  collectionName: 'components_paragraph_paragraphs';
  info: {
    displayName: 'PARAGRAPH';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    value: Attribute.Text;
  };
}

export interface SplListsSplists extends Schema.Component {
  collectionName: 'components_spl_lists_splists';
  info: {
    displayName: 'SPLISTS';
    icon: 'code';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    text: Attribute.String;
    list: Attribute.JSON;
  };
}

export interface SubHeadingsSubheadings extends Schema.Component {
  collectionName: 'components_sub_headings_subheadings';
  info: {
    displayName: 'SUBHEADINGS';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface SummaryblogsSummaryblogs extends Schema.Component {
  collectionName: 'components_summaryblogs_summaryblogs';
  info: {
    displayName: 'SUMMARYBLOGS';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    img: Attribute.String;
    title: Attribute.String;
    info: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-meta-data.blog-meta-data': BlogMetaDataBlogMetaData;
      'consult-us.consultus': ConsultUsConsultus;
      'custom-image.customimage': CustomImageCustomimage;
      'h3-headings.h3-headings': H3HeadingsH3Headings;
      'image.image': ImageImage;
      'main-heading.mainheading': MainHeadingMainheading;
      'paragraph.paragraph': ParagraphParagraph;
      'spl-lists.splists': SplListsSplists;
      'sub-headings.subheadings': SubHeadingsSubheadings;
      'summaryblogs.summaryblogs': SummaryblogsSummaryblogs;
    }
  }
}
