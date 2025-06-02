// Data
        const alunos = [
            {
                nome: "Arthur Diógenes",
                atividades: 27,
                htmlCss: 8,
                javascript: 7,
                react: 6,
                nodejs: 6,
                git: 0,
                notaSugerida: 9.5,
                observacao: "Excelente participação geral. Único ponto: Git/GitHub"
            },
            {
                nome: "Sara Morais",
                atividades: 23,
                htmlCss: 8,
                javascript: 6,
                react: 4,
                nodejs: 5,
                git: 0,
                notaSugerida: 9.0,
                observacao: "Forte base front-end. Melhorar React.js avançado"
            },
            {
                nome: "Adriana Cruz",
                atividades: 19,
                htmlCss: 6,
                javascript: 7,
                react: 2,
                nodejs: 4,
                git: 0,
                notaSugerida: 8.5,
                observacao: "Destaque em JS. Fortalecer React.js e Node.js"
            },
            {
                nome: "Leilla Carvalho",
                atividades: 17,
                htmlCss: 7,
                javascript: 5,
                react: 2,
                nodejs: 3,
                git: 0,
                notaSugerida: 8.0,
                observacao: "Excelente base HTML/CSS. Evoluir para React/Node"
            },
            {
                nome: "Hudson Bezerra",
                atividades: 17,
                htmlCss: 6,
                javascript: 4,
                react: 3,
                nodejs: 4,
                git: 0,
                notaSugerida: 8.0,
                observacao: "Equilibrado. Potencial full-stack developer"
            },
            {
                nome: "Lucas Carvalho",
                atividades: 17,
                htmlCss: 6,
                javascript: 5,
                react: 3,
                nodejs: 3,
                git: 0,
                notaSugerida: 8.0,
                observacao: "Consistente. Trabalha bem em equipe"
            },
            {
                nome: "Letícia Farias",
                atividades: 16,
                htmlCss: 5,
                javascript: 4,
                react: 3,
                nodejs: 4,
                git: 0,
                notaSugerida: 7.5,
                observacao: "Equilibrada. Boa colaboração em projetos"
            },
            {
                nome: "Filippe Monteiro",
                atividades: 16,
                htmlCss: 5,
                javascript: 3,
                react: 2,
                nodejs: 6,
                git: 0,
                notaSugerida: 7.5,
                observacao: "Especialização back-end. Fortalecer front-end"
            },
            {
                nome: "Wilson Carlos",
                atividades: 14,
                htmlCss: 4,
                javascript: 2,
                react: 2,
                nodejs: 6,
                git: 0,
                notaSugerida: 7.0,
                observacao: "Foco Node.js. Precisa equilibrar front-end"
            },
            {
                nome: "Jairo Rocha",
                atividades: 14,
                htmlCss: 2,
                javascript: 5,
                react: 2,
                nodejs: 5,
                git: 0,
                notaSugerida: 7.0,
                observacao: "Equilíbrio JS/Node. Melhorar HTML/CSS e React"
            },
            {
                nome: "Felicio Cavalcante",
                atividades: 13,
                htmlCss: 2,
                javascript: 2,
                react: 5,
                nodejs: 3,
                git: 1,
                notaSugerida: 7.5,
                observacao: "Destaque React + único com Git. Fortalecer base"
            },
            {
                nome: "Daniel Vinicius",
                atividades: 13,
                htmlCss: 3,
                javascript: 4,
                react: 2,
                nodejs: 4,
                git: 0,
                notaSugerida: 7.0,
                observacao: "Base sólida JS/Node. Evoluir React"
            },
            {
                nome: "Anna Beatriz",
                atividades: 10,
                htmlCss: 4,
                javascript: 2,
                react: 2,
                nodejs: 2,
                git: 0,
                notaSugerida: 6.5,
                observacao: "Base HTML/CSS. PRIORIDADE: JavaScript"
            },
            {
                nome: "Manoel Filho",
                atividades: 10,
                htmlCss: 6,
                javascript: 0,
                react: 1,
                nodejs: 3,
                git: 0,
                notaSugerida: 5.5,
                observacao: "CRÍTICO: Zero JavaScript. Urgente estudar JS"
            },
            {
                nome: "Mardonier Camurça",
                atividades: 9,
                htmlCss: 3,
                javascript: 4,
                react: 2,
                nodejs: 0,
                git: 0,
                notaSugerida: 6.0,
                observacao: "Boa base JS. Completar com Node.js"
            },
            {
                nome: "Rafael Azevedo",
                atividades: 9,
                htmlCss: 5,
                javascript: 3,
                react: 0,
                nodejs: 1,
                git: 0,
                notaSugerida: 6.0,
                observacao: "Forte HTML/CSS. Priorizar React.js"
            },
            {
                nome: "Emanuelle Rêgo",
                atividades: 8,
                htmlCss: 6,
                javascript: 2,
                react: 0,
                nodejs: 0,
                git: 0,
                notaSugerida: 5.5,
                observacao: "Foco HTML/CSS. Evoluir para JavaScript"
            },
            {
                nome: "Elias André",
                atividades: 8,
                htmlCss: 1,
                javascript: 3,
                react: 1,
                nodejs: 3,
                git: 0,
                notaSugerida: 6.0,
                observacao: "Equilibrio JS/Node. Fortalecer HTML/CSS"
            },
            {
                nome: "Rosangela Cardoso",
                atividades: 7,
                htmlCss: 3,
                javascript: 0,
                react: 2,
                nodejs: 2,
                git: 0,
                notaSugerida: 5.0,
                observacao: "URGENTE: Zero JavaScript. Base crítica"
            },
            {
                nome: "Marcos Oliveira",
                atividades: 6,
                htmlCss: 2,
                javascript: 3,
                react: 1,
                nodejs: 0,
                git: 0,
                notaSugerida: 5.5,
                observacao: "Base JS. Equilibrar HTML/CSS e iniciar Node"
            },
            {
                nome: "Vinicius Monteiro",
                atividades: 5,
                htmlCss: 0,
                javascript: 0,
                react: 0,
                nodejs: 0,
                git: 0,
                notaSugerida: 5.0,
                observacao: "Baixa participação. Aumentar engajamento geral"
            }
        ];

        // DOM Elements
        const searchInput = document.getElementById('searchInput');
        const gradeFilter = document.getElementById('gradeFilter');
        const studentsTable = document.getElementById('studentsTable');
        const totalStudents = document.getElementById('totalStudents');
        const currentDate = document.getElementById('currentDate');

        // Set current date
        currentDate.textContent = new Date().toLocaleDateString('pt-BR');

        // Filter functions
        function filterStudents() {
            const searchTerm = searchInput.value.toLowerCase();
            const gradeFilterValue = gradeFilter.value;

            const filtered = alunos.filter(aluno => {
                const matchesSearch = aluno.nome.toLowerCase().includes(searchTerm);
                const matchesGrade = gradeFilterValue === 'all' || 
                    (gradeFilterValue === 'high' && aluno.notaSugerida >= 8) ||
                    (gradeFilterValue === 'medium' && aluno.notaSugerida >= 6.5 && aluno.notaSugerida < 8) ||
                    (gradeFilterValue === 'low' && aluno.notaSugerida < 6.5);
                return matchesSearch && matchesGrade;
            });

            renderTable(filtered);
            totalStudents.textContent = filtered.length;
        }

        // Grade class function
        function getGradeClass(nota) {
            if (nota >= 8.5) return 'grade-excellent';
            if (nota >= 7) return 'grade-good';
            if (nota >= 6) return 'grade-average';
            return 'grade-low';
        }

        // Render table
        function renderTable(students) {
            studentsTable.innerHTML = students.map(aluno => `
                <tr>
                    <td>
                        <div class="student-name">${aluno.nome}</div>
                        <div class="student-activities">${aluno.atividades} atividades total</div>
                        <div class="student-observation">${aluno.observacao}</div>
                    </td>
                    <td style="text-align: center;">
                        <span class="tech-badge tech-html">${aluno.htmlCss}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="tech-badge tech-js">${aluno.javascript}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="tech-badge tech-react">${aluno.react}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="tech-badge tech-node">${aluno.nodejs}</span>
                    </td>
                    <td style="text-align: center;">
                        <span class="tech-badge tech-git">${aluno.git}</span>
                    </td>
                    <td style="text-align: center;">
                        <div class="grade-badge ${getGradeClass(aluno.notaSugerida)}">
                            ${aluno.notaSugerida.toFixed(1)}
                        </div>
                    </td>
                </tr>
            `).join('');
        }

        // Event listeners
        searchInput.addEventListener('input', filterStudents);
        gradeFilter.addEventListener('change', filterStudents);

        // Initial render
        renderTable(alunos);