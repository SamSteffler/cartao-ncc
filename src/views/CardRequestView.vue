<template>
    <div class="page-wrapper">
        <!-- Header -->
        <header id="app_top" role="banner" class="band shadowed no-print">
            <div class="band govbar2 no-print" data-role="govbar">
                <div style="margin: auto; max-width: 1248px; align-items: center; background-color: #01263f;">
                    <ul class="govbar2-list snipcss0-1-1-2" role="presentation" style="float:left;">
                        <li class="flag snipcss0-2-2-3"><a href="http://brasil.gov.br" class="uppercase snipcss0-3-3-4"
                                target="gov">Brasil</a></li>
                        <li class="snipcss0-2-2-5"><a href="http://brasil.gov.br/barra#acesso-informacao" target="gov"
                                class="snipcss0-3-5-6">Acesso à informação</a></li>
                    </ul>
                    <ul class="govbar2-list pull-right snipcss0-1-1-7" role="presentation">
                        <li class="snipcss0-2-7-8"><a href="http://brasil.gov.br/barra#participe" target="gov"
                                class="snipcss0-3-8-9">Participe</a></li>
                        <li class="snipcss0-2-7-10"><a href="http://www.servicos.gov.br" target="gov"
                                class="snipcss0-3-10-11">Serviços</a></li>
                        <li class="snipcss0-2-7-12"><a href="http://www.planalto.gov.br/legislacao" target="gov"
                                class="snipcss0-3-12-13">Legislação</a></li>
                        <li class="snipcss0-2-7-14"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais"
                                target="gov" class="snipcss0-3-14-15">Canais</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="band navbar-secondary">
                <div style="margin: auto; max-width: 1248px; background-color: #01263f; color: #fff;">
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="javascript:void(0);" 
                                @click="toggleDropdown('institucional')"
                                :aria-expanded="dropdowns.institucional"
                            >
                                Institucional <span class="caret"></span>
                            </a>
                            <ul v-if="dropdowns.institucional" class="dropdown-menu" role="menu">
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/autenticacao">
                                        <span class="icon-globe" aria-hidden="true"></span> Autenticação de Documentos
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/biblioteca">
                                        <span class="icon-globe" aria-hidden="true"></span> Biblioteca
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/concursos/inscricao/concursos.html">
                                        <span class="icon-globe" aria-hidden="true"></span> Concursos e Seleções Públicas
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/processos">
                                        <span class="icon-globe" aria-hidden="true"></span> Consulta Processos
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/diploma">
                                        <span class="icon-globe" aria-hidden="true"></span> Diploma Digital
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/ementario">
                                        <span class="icon-globe" aria-hidden="true"></span> Ementário
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/jai">
                                        <span class="icon-globe" aria-hidden="true"></span> Jornada Acadêmica Integrada
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/ouvidoria">
                                        <span class="icon-globe" aria-hidden="true"></span> Ouvidoria
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/documentos">
                                        <span class="icon-globe" aria-hidden="true"></span> Portal de Documentos
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/patrimonio">
                                        <span class="icon-globe" aria-hidden="true"></span> Portal do Patrimônio
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/ufsm-em-numeros">
                                        <span class="icon-globe" aria-hidden="true"></span> UFSM em Números
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="javascript:void(0);" 
                                @click="toggleDropdown('estudante')"
                                :aria-expanded="dropdowns.estudante"
                            >
                                Estudante <span class="caret"></span>
                            </a>
                            <ul v-if="dropdowns.estudante" class="dropdown-menu" role="menu">
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/agendamento">
                                        <span class="icon-globe" aria-hidden="true"></span> Agendamento
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/gsuite">
                                        <span class="icon-globe" aria-hidden="true"></span> E-mail Institucional
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/estudantil">
                                        <span class="icon-globe" aria-hidden="true"></span> Portal Estudantil
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/projetos">
                                        <span class="icon-globe" aria-hidden="true"></span> Projetos
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/ru">
                                        <span class="icon-globe" aria-hidden="true"></span> Restaurante Universitário
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="http://portal.ufsm.br/usuario">
                                        <span class="icon-globe" aria-hidden="true"></span> Usuário
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div id="app_menu" class="band navbar ufsm gradient">
                <div style="margin: auto; max-width: 1248px;">
                    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
                        <nav aria-label="Menu Geral do Usuário" style="flex: auto;">
                            <h1 class="appname uppercase humanist-font"
                                style="font-family: 'ZapfHumnst', sans-serif; font-size: larger; margin: 0;">
                                <a href="http://ncc.inf.ufsm.br/"><strong>NCC</strong> | Cartão NCC</a>
                            </h1>
                        </nav>
                        <div class="contador-sessao" role="presentation" style="margin-left: auto;">
                            <span class="timer">Sua sessão expira em </span><span id="timerLeft">{{ formattedTimeLeft
                                }}</span><span class="icone-sync" id="resetTimer" @click="resetIdleTime"
                                style="cursor: pointer;"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main style="margin: auto; max-width: 1248px; margin-top: 15px; padding: 10px;">
            <p style="text-align: justify;">
                O Núcleo de Ciência da Computação (NCC) tem como objetivo prestar suporte a atividades de ensino,
                pesquisa e extensão dos cursos de graduação em Ciência da Computação e Sistemas de Informação.
                A sala do NCC situa-se no 3° andar do Centro de Tecnologia (CT, Prédio 7), número 335.
                O local é dedicado para os alunos dos cursos de computação, sendo equipado com mesas de estudos,
                computadores para pesquisa, e pode ser utilizado para aulas e minicursos, normalmente ministrados pelos alunos
                participantes do PET CC e PET SI, os quais também tem as suas respectivas salas localizadas no CT.
                <br>O Cartão NCC foi desenvolvido especialmente para os estudantes do NCC,
                proporcionando acesso exclusivo a uma variedade de serviços e recursos essenciais para a jornada
                acadêmica. Com ele, você pode otimizar sua rotina de estudos, ampliar suas possibilidades de aprendizado
                e aproveitar ao máximo as oportunidades oferecidas pelo curso. Este documento representa seu acesso
                privilegiado às facilidades tecnológicas e educacionais que o Núcleo disponibiliza para garantir o
                desenvolvimento pleno das suas competências técnicas e acadêmicas.
            </p>

            <h3 style="text-align: justify;">Benefícios exclusivos do Cartão NCC:</h3>
            <br>
            <p style="text-align: justify;">
                <strong>Aluguel de Computadores e Notebooks:</strong> Com o Cartão NCC, você tem acesso prioritário aos
                computadores de alta performance disponíveis na sala do NCC, equipados com as mais recentes
                configurações
                de hardware e software para desenvolvimento. Adicionalmente, você pode alugar notebooks para utilizar
                nos
                seus estudos, trabalhos em grupo ou projetos pessoais, garantindo mobilidade e flexibilidade na sua
                rotina
                acadêmica. Os equipamentos são regularmente atualizados e mantidos pela equipe técnica do Núcleo,
                assegurando
                disponibilidade e desempenho adequado para todas as suas necessidades computacionais;
            </p>

            <p style="text-align: justify;">
                <strong>Empréstimo de Livros e Material Acadêmico:</strong> Tenha acesso facilitado ao acervo
                especializado
                de livros técnicos, científicos e acadêmicos da biblioteca do Núcleo. Nossa coleção abrange obras
                fundamentais
                de algoritmos, estruturas de dados, engenharia de software, inteligência artificial, redes de
                computadores e
                demais áreas essenciais da computação. O sistema de empréstimo é simplificado para portadores do Cartão
                NCC,
                permitindo prazos estendidos e renovações facilitadas, apoiando assim sua dedicação aos estudos e
                pesquisas;
            </p>

            <p style="text-align: justify;">
                <strong>Agendamento de Aulas, Laboratórios e Espaços de Estudo:</strong> Reserve com antecedência salas
                de
                estudo, laboratórios especializados e espaços colaborativos para realizar suas atividades acadêmicas.
                Este
                benefício permite que você participe de sessões de mentoria personalizadas, organize grupos de estudo,
                desenvolva projetos em equipe e agende aulas particulares com monitores qualificados das diversas
                disciplinas
                do Curso. O sistema de agendamento online garante praticidade e organização, permitindo que você planeje
                suas atividades acadêmicas com eficiência e sem conflitos de horário;
            </p>

            <p style="text-align: justify;">
                <strong>Acesso a Máquinas Virtuais e Ambientes de Desenvolvimento:</strong> Utilize infraestrutura
                completa
                de máquinas virtuais hospedadas nos servidores de alto desempenho do NCC através do aplicativo
                Parallels.
                Esta solução permite que você crie, configure e gerencie ambientes virtuais personalizados para
                desenvolvimento,
                teste e execução de aplicações em diferentes sistemas operacionais e plataformas. Ideal para
                experimentação
                com novas tecnologias, testes de compatibilidade e desenvolvimento de projetos que exigem configurações
                específicas de ambiente, tudo isso sem comprometer o desempenho do seu computador pessoal;
            </p>

            <p style="text-align: justify;">
                <strong>Suítes de Aplicativos e Ferramentas Profissionais:</strong> Aproveite licenças educacionais
                completas
                de ferramentas profissionais especializadas, incluindo o pacote Microsoft Office 365 com todas as suas
                funcionalidades premium, GitHub Copilot para desenvolvimento assistido por inteligência artificial,
                ambientes
                de desenvolvimento integrado como Visual Studio Professional e IntelliJ IDEA Ultimate, além de softwares
                de
                design e engenharia como SolidWorks, AutoCAD, Adobe Creative Suite e muitos outros. Complementando estes
                recursos, você também dispõe de 1TB de armazenamento em nuvem no OneDrive para backup automático,
                sincronização entre dispositivos e colaboração em tempo real nos seus projetos e trabalhos acadêmicos.
                Todas estas ferramentas são disponibilizadas gratuitamente para auxiliar no desenvolvimento das suas
                habilidades profissionais e na execução de projetos de alta qualidade;
            </p>

            <p style="text-align: justify;">
                Solicite o seu cartão através deste portal oficial, fornecendo os dados pessoais e documentação
                necessária
                para validação. O período de análise e avaliação das informações submetidas pode levar até sete dias
                úteis,
                sendo o serviço disponibilizado sem qualquer custo financeiro para o corpo discente. Após a aprovação,
                você
                receberá instruções detalhadas por e-mail sobre como ativar e utilizar todos os benefícios disponíveis.
                <br><br>O Cartão NCC é um direito garantido ao estudante regularmente matriculado no curso e representa
                o
                compromisso do Núcleo de Ciência da Computação em fornecer toda a infraestrutura, recursos e suporte
                necessários para que você alcance a excelência acadêmica e profissional. Este documento permite que o
                aluno tenha acesso integral aos recursos tecnológicos e educacionais indispensáveis para potencializar
                seus estudos, expandir suas experiências práticas e desenvolver projetos inovadores dentro do ambiente
                estimulante e colaborativo do Núcleo de Ciência da Computação.
            </p>

            <!-- EULA Box -->
            <div ref="eulaBox" @scroll="handleEulaScroll" class="box bordered shadowed rounded"
                style="margin: 20px 0; max-height: 200px; max-width: 800px; overflow-y: auto; padding: 0; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;">
                <canvas ref="eulaCanvas" width="840" height="2840"
                    style="width: 100%; height: auto; display: block; pointer-events: none;"></canvas>
            </div>

            <!-- EULA Acceptance Checkbox -->
            <div style="margin: 20px 0;">
                <label
                    :style="{ display: 'flex', alignItems: 'center', cursor: isOnBottom ? 'pointer' : 'not-allowed', opacity: isOnBottom ? 1 : 0.5 }">
                    <input type="checkbox" v-model="eulaAccepted" :disabled="!isOnBottom"
                        :style="{ width: 'auto', marginRight: '10px', cursor: isOnBottom ? 'pointer' : 'not-allowed' }">
                    <span>Li e concordo com os Termos e Condições apresentados acima.</span>
                </label>
                <span v-show="errors.eula" class="warning" style="margin-top: 5px;">
                    Você precisa concordar com os Termos e Condições para continuar.
                </span>
            </div>

            <h3 style="text-align: justify;">Formulário de Solicitação</h3>

            <!-- Error Message -->
            <div v-show="showError"
                class="box bordered shadowed rounded small-padding-v error snipcss-AvUdO error-boxmsg">
                <i class="icon-warning-sign"></i> Acesso negado: dados inválidos.
            </div>

            <!-- Success Message -->
            <div v-show="showSuccess"
                class="box bordered shadowed rounded small-padding-v success snipcss-AvUdO success-boxmsg">
                Submissão aceita. Atualizações acerca da requisição serão enviadas para o email
                <span>{{ formData.email }}</span> dentro do prazo de sete dias úteis. Certifique-se de confirmar o
                pedido da sua carteirinha respondendo ao email que será enviado pelo NCC.
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit"
                style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;" autocomplete="off">
                <!-- Matrícula -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="matricula">Matrícula:</label>
                    <input type="search" id="matricula" v-model="formData.matricula" autocomplete="off">
                    <span v-show="errors.matricula" class="warning">
                        Por favor, preencha este campo com uma matrícula válida.
                    </span>
                </div>

                <!-- Nome Completo -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="nome">Nome completo:</label>
                    <input type="search" id="nome" v-model="formData.nome" autocomplete="off">
                    <span v-show="errors.nome" class="warning">
                        Por favor, preencha este campo.
                    </span>
                </div>

                <!-- Email -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" v-model="formData.email" autocomplete="off">
                    <span v-show="errors.email" class="warning">
                        Por favor, preencha este campo com um email válido (@acad.ufsm.br).
                    </span>
                </div>

                <!-- Telefone -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="telefone">Telefone:</label>
                    <input type="text" id="telefone" v-model="formData.telefone" autocomplete="off">
                    <span v-show="errors.telefone" class="warning">
                        Por favor, preencha este campo.
                    </span>
                </div>

                <!-- Foto -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="foto">Foto 3x4:</label>
                    <div class="file-input-container">
                        <input type="file" id="foto" @change="handleFotoChange" accept="image/*">
                        <div v-if="fotoPreview" class="preview">
                            <img :src="fotoPreview" alt="Preview da foto">
                            <div class="info">{{ fotoName }}</div>
                        </div>
                        <div v-else>
                            Clique ou arraste uma foto 3x4
                        </div>
                    </div>
                    <span v-show="errors.foto" class="warning">
                        Por favor, envie uma foto 3x4.
                    </span>
                </div>

                <!-- Documento -->
                <div style="flex: 1 1 45%; min-width: 300px;">
                    <label for="documento">Documento com Foto:</label>
                    <div class="file-input-container">
                        <input type="file" id="documento" @change="handleDocumentoChange" accept="image/*,.pdf">
                        <div v-if="documentoName" class="info">
                            {{ documentoName }}
                        </div>
                        <div v-else>
                            Clique ou arraste um documento
                        </div>
                    </div>
                    <span v-show="errors.documento" class="warning">
                        Por favor, envie um documento com foto.
                    </span>
                </div>

                <!-- Submit Button -->
                <div style="flex: 1 1 100%; display: flex; align-items: center; margin-top: 20px;">
                    <button type="submit" class="custom-button">Enviar</button>
                    <div v-show="isLoading" class="loading-spinner" style="margin-left: 10px;"></div>
                </div>
            </form>

            <br>
            <br>
        </main>

        <!-- Footer -->
        <footer style="padding: 0px;">
            <div class="footer-ferramenta py-2 snipcss-DNCgK">
                <div class="container">
                    <div class="d-md-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <a href="https://www.ufsm.br/reitoria/acesso-a-informacao" title="Acesso à informação">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 49" height="49" width="117"
                                    shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                                    <defs></defs>
                                    <circle cx="22" cy="23" r="22" fill="#ddd"></circle>
                                    <path style="stroke:#222;stroke-width:9;stroke-linecap:round;" d="m 22,23 v 13">
                                    </path>
                                    <path style="stroke:#ddd;stroke-width:4;stroke-linejoin:round;"
                                        d="m 4,43 3,-6 4,3 z"></path>
                                    <circle r="4.5" cy="11" cx="22" fill="#222"></circle>
                                    <g fill="#ddd">
                                        <text x="47" y="22">
                                            <tspan class="a" y="18"> Acesso à</tspan>
                                            <tspan class="a" x="47" y="31"> Informação</tspan>
                                        </text>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div class="d-flex align-items-center">
                            <p class="m-0" style="color:#ccc">Desenvolvido com o CMS de código aberto <a
                                    href="http://wordpress.org/" target="_blank" style="color:#ccc">Wordpress</a></p>
                        </div>
                        <div class="d-flex align-items-center">
                            <p class="m-0" style="color:#ccc">2025 - NϹC</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { renderEulaToCanvas, getEulaData } from '../utils/eulaRenderer.js'

const formData = reactive({
    matricula: '',
    nome: '',
    email: '',
    telefone: '',
    foto: null,
    documento: null
})

const errors = reactive({
    matricula: false,
    nome: false,
    email: false,
    telefone: false,
    foto: false,
    documento: false,
    eula: false
})

const showError = ref(false)
const showSuccess = ref(false)
const isLoading = ref(false)
const fotoPreview = ref(null)
const fotoName = ref('')
const documentoName = ref('')
const eulaCanvas = ref(null)
const eulaBox = ref(null)
const isOnBottom = ref(false)
const maxScrollTop = ref(0)

// Dropdown menus
const dropdowns = reactive({
  institucional: false,
  estudante: false
})

const toggleDropdown = (dropdown) => {
  // Close all other dropdowns
  Object.keys(dropdowns).forEach(key => {
    if (key !== dropdown) {
      dropdowns[key] = false
    }
  })
  // Toggle the selected dropdown
  dropdowns[dropdown] = !dropdowns[dropdown]
}

const closeAllDropdowns = () => {
  Object.keys(dropdowns).forEach(key => {
    dropdowns[key] = false
  })
}

// Watchdog timer
const idleTime = ref(0)
const timeoutSeconds = 180 // 3 minutes
let timerInterval = null

const formattedTimeLeft = computed(() => {
    const secondsLeft = timeoutSeconds - idleTime.value
    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const resetIdleTime = () => {
    idleTime.value = 0
}

const reloadPage = () => {
    // Clear form and reload
    Object.keys(formData).forEach(key => {
        formData[key] = key === 'matricula' || key === 'nome' || key === 'email' || key === 'telefone' ? '' : null
    })
    fotoPreview.value = null
    fotoName.value = ''
    documentoName.value = ''
    eulaAccepted.value = false
    location.reload()
}

onMounted(() => {
    // Render EULA to canvas after component mounts
    if (eulaCanvas.value) {
        renderEulaToCanvas(eulaCanvas.value)
    }

    // Start watchdog timer
    timerInterval = setInterval(() => {
        idleTime.value++
        if (idleTime.value >= timeoutSeconds) {
            reloadPage()
        }
    }, 1000)
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  // Cleanup timer
  if (timerInterval) {
    clearInterval(timerInterval)
  }
  
  // Remove click outside listener
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event) => {
  const navMenu = document.querySelector('.navbar-secondary')
  if (navMenu && !navMenu.contains(event.target)) {
    closeAllDropdowns()
  }
}

const eulaAccepted = ref(false)

const handleEulaScroll = () => {
    if (eulaBox.value) {
        const { scrollTop, scrollHeight, clientHeight } = eulaBox.value

        if (scrollTop < maxScrollTop.value) {
            eulaBox.value.scrollTop = maxScrollTop.value
            return
        }

        maxScrollTop.value = scrollTop
        // Check if scrolled to bottom (with 5px tolerance)
        if (eulaBox.value.scrollTop + clientHeight >= scrollHeight - 5) {
            isOnBottom.value = true
        }
    }
}

const handleFotoChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        fotoName.value = file.name
        const reader = new FileReader()
        reader.onload = (e) => {
            fotoPreview.value = e.target.result
        }
        reader.readAsDataURL(file)
        formData.foto = file
        errors.foto = false
    }
}

const handleDocumentoChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        documentoName.value = file.name
        formData.documento = file
        errors.documento = false
    }
}

const validateForm = () => {
    let valid = true

    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = false)

    // Validate matricula
    if (!formData.matricula || isNaN(formData.matricula) ||
        formData.matricula > 202699999 || formData.matricula < 202600000) {
        errors.matricula = true
        valid = false
    }

    // Validate nome completo
    if (!formData.nome) {
        errors.nome = true
        valid = false
    }

    // Validate email
    if (!formData.email || !formData.email.endsWith('@acad.ufsm.br')) {
        errors.email = true
        valid = false
    }

    // Validate telefone
    if (!formData.telefone) {
        errors.telefone = true
        valid = false
    }

    // Validate foto
    if (!formData.foto) {
        errors.foto = true
        valid = false
    }

    // Validate documento
    if (!formData.documento) {
        errors.documento = true
        valid = false
    }

    // Validate EULA acceptance
    if (!eulaAccepted.value) {
        errors.eula = true
        valid = false
    }

    return valid
}

const encodeFormData = () => {
    const payload = {
        m: formData.matricula,
        n: formData.nome,
        e: formData.email,
        t: formData.telefone,
        eu: eulaAccepted.value,
        ts: Date.now(),
        sid: `sess_${Math.random().toString(36).substring(2, 15)}`
    }
    return btoa(encodeURIComponent(JSON.stringify(payload)))
}

const fakeApiCall = async (endpoint, payload) => {
    try {
        const response = await fetch(`/api/${endpoint}.html`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Request-ID': `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
                'X-Session-Token': `token_ncc_${Math.random().toString(36).substring(2, 15)}`,
                'X-Client-Version': '2.1.0',
                'Authorization': `Bearer ${btoa(Date.now().toString())}`
            },
            body: JSON.stringify(payload)
        })
        return await response.text()
    } catch (error) {
        // Silently fail - it's just for show
        return null
    }
}

const handleSubmit = async () => {
    showError.value = false
    showSuccess.value = false

    const valid = validateForm()

    if (valid) {
        isLoading.value = true

        // Stage 1: Validation
        await fakeApiCall('validate', {
            encryptedData: encodeFormData(),
            checksum: btoa(Math.random().toString()),
            timestamp: Date.now()
        })
        await new Promise(resolve => setTimeout(resolve, 800))

        // Stage 2: Upload files
        const fotoBase64 = formData.foto ? await new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = (e) => resolve(e.target.result.split(',')[1])
            reader.readAsDataURL(formData.foto)
        }) : null

        const docBase64 = formData.documento ? await new Promise((resolve) => {
            const reader = new FileReader()
            reader.onload = (e) => resolve(e.target.result.split(',')[1])
            reader.readAsDataURL(formData.documento)
        }) : null

        await fakeApiCall('upload', {
            files: {
                foto: fotoBase64 ? fotoBase64.substring(0, 100) + '...[truncated]' : null,
                documento: docBase64 ? docBase64.substring(0, 100) + '...[truncated]' : null
            },
            metadata: {
                fotoSize: formData.foto?.size,
                documentoSize: formData.documento?.size
            }
        })
        await new Promise(resolve => setTimeout(resolve, 1200))

        // Stage 3: Processing
        await fakeApiCall('process', {
            requestId: `req_ncc_2025_${Math.random().toString(36).substring(2, 15)}`,
            encryptedPayload: encodeFormData(),
            eulaData: getEulaData()
        })
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Stage 4: Final submission
        const finalDelay = eval(atob('TWF0aC5yYW5kb20oKSAqIDcwMDAgKyAzMDAw'))
        await fakeApiCall('submit', {
            confirmationRequest: true,
            encryptedData: encodeFormData(),
            signature: btoa(Date.now().toString() + Math.random().toString())
        })
        await new Promise(resolve => setTimeout(resolve, finalDelay))

        isLoading.value = false
        showSuccess.value = true

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        showError.value = true
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
</script>

<style scoped>
/* Component-specific overrides only */
.page-wrapper {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
/* Dropdown navigation styles */
.navbar-secondary {
  height: 24px;
  background-color: #01263f;
  padding: 0;
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: 4px 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #01263f;
  color: #fff;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.dropdown-menu {
  position: absolute !important;
  display: block !important;
  top: 100% !important;
  left: 0 !important;
  z-index: 9999 !important;
  min-width: 250px;
  padding: 5px 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
  color: #262626;
}

.dropdown-menu .icon-globe {
  margin-right: 8px;
}
label {
    display: block;
    margin-top: 10px;
}

input[type="text"],
input[type="search"],
input[type="number"],
input[type="file"],
input[type="email"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

.file-input-container {
    border: 2px dashed #ccc;
    padding: 10px;
    position: relative;
    background-color: #f9f9f9;
    margin-top: 5px;
    text-align: center;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.file-input-container:hover {
    background-color: #e9e9e9;
}

.file-input-container input[type="file"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.file-input-container img {
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
}

.file-input-container .preview {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.file-input-container .info {
    margin-top: 10px;
}

.warning {
    color: red;
    display: block;
    margin-top: 5px;
}

.loading-spinner {
    border: 0.4em solid #f3f3f3;
    border-top: 0.4em solid #3498db;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    animation: spin 2s linear infinite;
    display: inline-block;
    margin-left: 15px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.custom-button {
    background-color: rgb(32, 123, 192);
    color: rgb(255, 255, 255);
    display: inline-block;
    position: relative;
    width: auto;
    height: 38px;
    padding: 8px 16px;
    margin: 2px;
    border: none;
    border-radius: 4px;
    font-family: zapfhumnst, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.04px 0px 0px, rgba(255, 255, 255, 0.3) 0px 1.04px 1.04px 0px inset;
    transition: all;
}

.custom-button:hover {
    background-color: rgb(27, 103, 161);
    color: rgb(255, 255, 255);
}
</style>
