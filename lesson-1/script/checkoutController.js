const checkoutNode = document.querySelector('.checkout__container');

if (checkoutNode) {
  const checkoutContainer = new Vue({
    el: '.checkout__container',
    data: {
      fields: {
        firstName: ' ',
        lastName: ' ',
        phone: checkoutTexts.phonePlaceholder,
        email: ' '
      },
      optional: {
        shipping: {
          address: ' ',
          postOffice: ' '
        },

        comment: ' ',
        shippingType: 'delivery'
      }
    },
    methods: {
      onPhoneFormClick: function(event) {
        const name = event.target.name;
        const formValue = checkoutContainer.fields[name];

        if(isPhoneInputEmpty(formValue)) {
          return checkoutContainer.fields[name] = checkoutTexts.phoneInitial;
        }
      },
      prepareForm: function(event) {
        const name = event.target.name;
        if (name) {
          const model = checkoutContainer.fields[name];
          checkoutContainer.fields[name] = model.trim();
        }
      },
      prepareOptionalForm: function(event) {
        const name = event.target.name;
        if (name) {
          const model = checkoutContainer.optional.shipping[name];
          checkoutContainer.optional.shipping[name] = model.trim();
        }
      },
      updateForm: function(event) {
        const name = event.target.name;

        if(name === 'phone') {
          const value = checkoutContainer.fields[name];

          if(isPhoneInputEmpty(value)) {
            checkoutContainer.fields[name] = '';
          }
        }

        if(name === 'email') {
          const value = checkoutContainer.fields[name];
          const hasEmailSign = /@/.test(value);

          if(!hasEmailSign) checkoutContainer.fields[name] = '';
        }

      },

      isEmpty: function(event) {
        return checkoutContainer.fields[event.target.name];
      },

      confirmOrder: function() {
        let basicParams = {
          firstname: checkoutContainer.fields.firstName,
          lastname: checkoutContainer.fields.lastName,
          email: checkoutContainer.fields.email,
          telephone: checkoutContainer.fields.phone,
          shippingType: checkoutContainer.optional.shippingType
        };

        const additionalParams = {
          comment: checkoutContainer.optional.comment.trim()
        };

        const shippingParams = {
          address: checkoutContainer.optional.shipping.address,
          postOffice: checkoutContainer.optional.shipping.postOffice
        };

        const emptyBasicFields = getEmptyKeys(basicParams);

        if (emptyBasicFields.length) {
          showModal(modalTexts.wrongMainFields);
          return;
        }

        if (checkoutContainer.optional.shippingType === 'delivery') {

          if (getEmptyKeys(shippingParams).length) {
            showModal(modalTexts.wrongDelivery);
            return;
          }

          basicParams = Object.assign({}, basicParams, shippingParams);
        }

        const params = Object.assign({}, basicParams, additionalParams);

        const dataToSend = getFormData(params);

        sendMail(dataToSend);

      }
    }
  });
}