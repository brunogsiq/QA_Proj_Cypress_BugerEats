let contexto = 1;
let cenario = 1;
let teste = 1;

describe("01 - Home Page", () => 
{
    //antes de cada contexto ou teste...
    beforeEach(() =>
    {
        cy.visitarHome();
    });

    //contexto de teste
    context("01.1 - Validações Visuais.", () =>
    {
        //primeiro teste
        it('01.1.1 - Validar Frase Principal', () => {
            cy.get("main > h1")
                .should("have.text", "Seja um parceiro entregador pela Buger Eats")
                .should("have.css", "color", "rgb(50, 33, 83)");
        });
        it("01.1.2 - Validar Frase Subsquente.", () =>
        {
            cy.get("main > p")
                .should("be.visible")
                .should("have.text", "Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.")
                .should("have.css", "color", "rgb(108, 108, 128)");
        });
        it("01.1.3 - Validar Opção Cadastre-se.", () =>
        {
            cy.get("main > a")
                .should("be.visible")
            cy.get("main > a > strong")
                .should("have.text", "Cadastre-se para fazer entregas")
                .should("have.css", "color", "rgb(255, 255, 255)");
        });
    });

    context("01.2 - Validações Funcionais.", () =>
    {
        it('01.2.1 - Validar acesso a tela de cadastro.', () =>
        {
            cy.get("main > a")
                .click();

            cy.get("form > h1")
                .should("contain.text", "Cadastre-se para ")
        });
    });
});