//Позицію,колір і іконку не вийшло додати. Буду ще проьувати, поки що додаю те,що зробила.
/// <reference types="cypress"/>
describe("hm4", () => {

    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-light-theme.jpg"]').click();
      cy.get('[title="Modal & Overlays"]').click();
      cy.get('[title="Toastr"]').click();
      cy.get('[class="eva eva-menu-outline"]').click();
      
      
    });
  
      it("Test1", () => {
        const expectedResult = {
         // icon: 'checkmark',      
      title: 'test',     
      content: 'test1',    
      //color: 'rgb(96, 175, 32)',  
      
        }
       
          cy.get('[ng-reflect-selected="top-right"]').click();
           cy.get('#nb-option-24').click()
          cy.get('[name="title"]').clear().type('test');
          cy.get('[name="content"]').clear().type('test1');
          cy.get('[ng-reflect-name="timeout"]').clear().type('60000');
          cy.get('[ng-reflect-selected="primary"]').click();
          cy.get('[ng-reflect-value="success"]').click();
          cy.contains('button', 'Show toast').click()
          cy.get('.ng-tns-c209-54').eq(0).should('be.visible')
         
          cy.get('.title.subtitle').invoke('text').should('contain', expectedResult.title);
           cy.get('.message').invoke('text').should('contain', expectedResult.content);
          //cy.get('.checkmark').eq(2).should('have.class', expectedResult.icon);
           //cy.get('.ng-tns-c209-54').should('have.css', 'background-color', expectedResult.color);
          
  
     
      });
  
  
  
     it("Test2", () => {
  
      const expectedResult = {
        // icon: 'alert-triangle',      
     title: 'test',     
     content: 'test2',    
     //color: 'rgb(242, 154, 0)'
      }
     
      cy.get('[ng-reflect-selected="top-right"]').click();
      cy.get('#nb-option-25').click()
    cy.get('[name="title"]').clear().type('test');
    cy.get('[name="content"]').clear().type('test2');
    cy.get('[ng-reflect-name="timeout"]').clear().type('60000');
    cy.get('[ng-reflect-selected="primary"]').click();
    cy.get('[ng-reflect-value="warning"]').click();
    cy.contains('button', 'Show toast').click()
    cy.get('.ng-tns-c209-54').eq(0).should('be.visible')
   
    cy.get('.title.subtitle').invoke('text').should('contain', expectedResult.title);
     cy.get('.message').invoke('text').should('contain', expectedResult.content);
     //cy.get('').should('have.css', 'background-color', expectedResult.color);
          
  
    })
  
    it("Test3", () => {
  
      const expectedResult = {
        // icon: 'question-mark',      
     title: 'test',     
     content: 'test3',    
     //color: 'rgb(4, 149, 238)'
      }
     
      cy.get('[ng-reflect-selected="top-right"]').click();
      cy.get('#nb-option-26').click()
    cy.get('[name="title"]').clear().type('test');
    cy.get('[name="content"]').clear().type('test3');
    cy.get('[ng-reflect-name="timeout"]').clear().type('60000');
    cy.get('[ng-reflect-selected="primary"]').click();
    cy.get('[ng-reflect-value="info"]').click();
    cy.contains('button', 'Show toast').click()
    cy.get('.ng-tns-c209-54').eq(0).should('be.visible')
   
    cy.get('.title.subtitle').invoke('text').should('contain', expectedResult.title);
     cy.get('.message').invoke('text').should('contain', expectedResult.content);
     //cy.get('').should('have.css', 'background-color', expectedResult.color);
          
  
    })
  
    it("Test4", () => {
  
      const expectedResult = {
        // icon: 'flash',      
     title: 'test',     
     content: 'test4',    
     //color: 'rgb(207, 51, 650)'
      }
     
      cy.get('[ng-reflect-selected="top-right"]').click();
      cy.get('#nb-option-27').click()
    cy.get('[name="title"]').clear().type('test');
    cy.get('[name="content"]').clear().type('test4');
    cy.get('[ng-reflect-name="timeout"]').clear().type('60000');
    cy.get('[ng-reflect-selected="primary"]').click();
    cy.get('[ng-reflect-value="danger"]').click();
    cy.contains('button', 'Show toast').click()
    cy.get('.ng-tns-c209-54').eq(0).should('be.visible')
   
    cy.get('.title.subtitle').invoke('text').should('contain', expectedResult.title);
     cy.get('.message').invoke('text').should('contain', expectedResult.content);
     //cy.get('').should('have.css', 'background-color', expectedResult.color);
          
    })
  })
  
  