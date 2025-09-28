    // Seleciona o formulário
    const form = document.querySelector(".containerContato form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que a página recarregue

        // Pega os valores digitados
        const nome = document.getElementById("txtNome").value.trim();
        const email = document.getElementById("txtEmail").value.trim();
        const mensagem = document.getElementById("txtMens").value.trim();

        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Cria a mensagem que será enviada
        const texto = `Olá! Meu nome é ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}`;

        // Número do WhatsApp no formato internacional (55 para Brasil)
        const numero = "5516997444062";

        // URL do WhatsApp Web
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        // Abre o WhatsApp Web em nova aba
        window.open(url, "_blank");
    });

