import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderInfoAddress extends Schema.Component {
  collectionName: 'components_order_info_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    cep: Attribute.String;
    rua: Attribute.String;
    numero: Attribute.String;
    complemento: Attribute.String;
    bairro: Attribute.String;
    cidade: Attribute.String;
    uf: Attribute.String;
  };
}

export interface OrderInfoCoffees extends Schema.Component {
  collectionName: 'components_order_info_coffees';
  info: {
    displayName: 'Coffees';
    icon: 'cup';
    description: '';
  };
  attributes: {
    price: Attribute.Decimal;
    amount: Attribute.Integer;
    coffeeId: Attribute.Relation<
      'order-info.coffees',
      'oneToOne',
      'api::coffee.coffee'
    >;
  };
}

export interface OrderInfoUser extends Schema.Component {
  collectionName: 'components_order_info_users';
  info: {
    displayName: 'user';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'order-info.address': OrderInfoAddress;
      'order-info.coffees': OrderInfoCoffees;
      'order-info.user': OrderInfoUser;
    }
  }
}
