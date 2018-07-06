var checkoutNode = document.querySelector('.checkout__container');

if (checkoutNode) {
  var checkoutContainer = new Vue({
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
        var name = event.target.name;
        var formValue = checkoutContainer.fields[name];

        if(isPhoneInputEmpty(formValue)) {
          return checkoutContainer.fields[name] = checkoutTexts.phoneInitial;
        }
      },
      prepareForm: function(event) {
        var name = event.target.name;
        if (name) {
          var model = checkoutContainer.fields[name];
          checkoutContainer.fields[name] = model.trim();
        }
      },
      prepareOptionalForm: function(event) {
        var name = event.target.name;
        if (name) {
          var model = checkoutContainer.optional.shipping[name];
          checkoutContainer.optional.shipping[name] = model.trim();
        }
      },
      updateForm: function(event) {
        var name = event.target.name;

        if(name === 'phone') {
          var value = checkoutContainer.fields[name];

          if(isPhoneInputEmpty(value)) {
            checkoutContainer.fields[name] = '';
          }
        }

        if(name === 'email') {
          var value = checkoutContainer.fields[name];
          var hasEmailSign = /@/.test(value);

          if(!hasEmailSign) checkoutContainer.fields[name] = '';
        }

      },

      isEmpty: function(event) {
        return checkoutContainer.fields[event.target.name];
      },

      confirmOrder: function() {
        var basicParams = {
          firstname: checkoutContainer.fields.firstName,
          lastname: checkoutContainer.fields.lastName,
          email: checkoutContainer.fields.email,
          telephone: checkoutContainer.fields.phone,
          shippingType: checkoutContainer.optional.shippingType
        };

        var additionalParams = {
          comment: checkoutContainer.optional.comment.trim()
        };

        var shippingParams = {
          address: checkoutContainer.optional.shipping.address,
          postOffice: checkoutContainer.optional.shipping.postOffice
        };

        var emptyBasicFields = getEmptyKeys(basicParams);

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

        var params = Object.assign({}, basicParams, additionalParams);

        var dataToSend = getFormData(params);

        sendMail(dataToSend);

      }
    }
  });
}