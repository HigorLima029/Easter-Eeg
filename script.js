// Sistema de detecção do Easter Egg
        let sequence = '';
        let target = 'ESTOQUE';
        let cafeCount = 0;
        let bugCount = 0;
        let sonoCount = 0;
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                resetEasterEgg();
                return;
            }
            
            sequence += e.key.toUpperCase();
            
            if (sequence.length > target.length) {
                sequence = sequence.slice(-target.length);
            }
            
            if (sequence === target) {
                ativarEasterEgg();
            }
        });
        
        function ativarEasterEgg() {
            document.getElementById('easterEgg').style.display = 'block';
            document.querySelector('.activation-hint').style.display = 'none';
            
            // Efeito de confetti
            criarConfetti();
            
            // Inicializar valores aleatórios
            document.getElementById('motivacao').textContent = Math.floor(Math.random() * 10);
            document.getElementById('sono').textContent = (Math.random() * 8).toFixed(1);
            document.getElementById('pizza').textContent = Math.floor(Math.random() * 3);
            document.getElementById('deadlines').textContent = Math.floor(Math.random() * 100);
        }
        
        function resetEasterEgg() {
            document.getElementById('easterEgg').style.display = 'none';
            document.querySelector('.activation-hint').style.display = 'block';
            sequence = '';
            cafeCount = 0;
            bugCount = 0;
            sonoCount = 0;
            atualizarStats();
        }
        
        function adicionarMotivacao() {
            cafeCount++;
            let motivacao = document.getElementById('motivacao');
            let currentValue = parseInt(motivacao.textContent);
            motivacao.textContent = currentValue + 1;
            
            criarEmojiVoador('☕');
            atualizarStats();
            
            if (cafeCount > 5) {
                document.getElementById('statusDev').textContent = 'Cafeínado demais!';
            }
        }
        
        function criarBug() {
            bugCount++;
            let bugs = document.getElementById('bugs');
            bugs.textContent = '∞++';
            
            setTimeout(() => {
                bugs.textContent = '∞';
            }, 1000);
            
            criarEmojiVoador('🐛');
            atualizarStats();
        }
        
        function tentarDormir() {
            sonoCount++;
            let sono = document.getElementById('sono');
            let currentValue = parseFloat(sono.textContent);
            sono.textContent = Math.max(0, currentValue - 0.5).toFixed(1);
            
            criarEmojiVoador('😴');
            atualizarStats();
            
            if (sonoCount > 3) {
                document.getElementById('statusDev').textContent = 'Zumbi do código';
            }
        }
        
        function gerarRelatorio() {
            const relatorios = [
                'Produtividade: 42% (medida em memes por hora)',
                'Eficiência: Stack Overflow dependente',
                'Qualidade: "Funciona na minha máquina"',
                'Documentação: Código autodocumentado (spoiler: não está)',
                'Testes: Testado em produção com sucesso',
                'Performance: Mais rápido que o internet explorer'
            ];
            
            const relatorio = relatorios[Math.floor(Math.random() * relatorios.length)];
            alert('📊 Relatório Gerado:\n\n' + relatorio);
            
            criarEmojiVoador('📊');
        }
        
        function criarEmojiVoador(emoji) {
            const emojiElement = document.createElement('div');
            emojiElement.className = 'floating-emoji';
            emojiElement.textContent = emoji;
            emojiElement.style.left = Math.random() * window.innerWidth + 'px';
            emojiElement.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(emojiElement);
            
            setTimeout(() => {
                emojiElement.remove();
            }, 3000);
        }
        
        function criarConfetti() {
            const emojis = ['🎉', '🎊', '✨', '🎈', '🎁', '🏆'];
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                    criarEmojiVoador(emoji);
                }, i * 100);
            }
        }
        
        function atualizarStats() {
            document.getElementById('cafeTotal').textContent = cafeCount;
            document.getElementById('bugTotal').textContent = bugCount;
            document.getElementById('sonoTotal').textContent = sonoCount;
            
            if (cafeCount > 10) {
                document.getElementById('statusDev').textContent = 'Vibrando na frequência do café';
            } else if (bugCount > 5) {
                document.getElementById('statusDev').textContent = 'Criador oficial de bugs';
            } else if (sonoCount > 5) {
                document.getElementById('statusDev').textContent = 'Precisa urgentemente de uma soneca';
            }
        }
        
        // Mensagens aleatórias no console
        console.log('🎮 Easter Egg ativo! Digite "ESTOQUE" para descobrir o estoque secreto!');
        console.log('💡 Dica: Cada botão faz algo diferente e atualiza as estatísticas!');
        console.log('🎯 Criado com ❤️ para a equipe de desenvolvimento!');
    