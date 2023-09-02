describe('Тестирование покупки новой фото тренера', function () {
    
    it('Новое фото тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get('.k_form_f_email').type('khde1503@yandex.ru');
        cy.get('#password').type('Dionis+pokemon13!');
        cy.get('.auth__button').should('be.enabled');
        cy.get('.auth__button').click();
        cy.get('.header__btn:nth-child(3)').click();
        cy.get('li.shop__item:nth-child(4) > button:nth-child(4)').click(); //здесь меняем номер фото аватара
        cy.get('input.pay_base-input-v2:nth-child(3)').type('5555555555554444');
        cy.get('.k_input_date').type('1125');
        cy.get('.k_input_ccv').type('125');
        cy.get('.k_input_name').type('IVAN IVANOV');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно');
        cy.get('.payment__adv').should('be.visible');
        cy.get('.payment__adv').click();

     })
})