import '../style/scss/OurAdvantages.scss'
import people from '../images/OurAdvantages/IconPeople.svg'
import savings from '../images/OurAdvantages/iconSavings.svg'
import tech from '../images/OurAdvantages/IconTech.svg'
import services from '../images/OurAdvantages/IconServices.svg'
import serviceses from '../images/OurAdvantages/iconServiceses.svg'
import drone from '../images/OurAdvantages/iconDrone.svg'
import group from '../images/OurAdvantages/Group.svg'
export default function Favorite() {
    return (
        <div className="container">
            <div>
                <h1 className='OurAdvantages-h1'>Почему нам доверяют?</h1>
                <h4 className="OurAdvantages-h4">Наши приемущества </h4>
            </div>
            <div className="OurAdvantages-grid">
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={people}></img>
                        </div>
                        <div>
                            <span>
                                Квалифицированные сотрудники
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        Все наши сотрудники имеют многолетний опыт работы в сфере беспилотной авиации. Нами было реализовано множество проектов различной тематики и самой различной сложности.
                    </div>
                </div>
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={savings}></img>
                        </div>
                        <div>
                            <span>
                                Высокотехнологичное оборудование
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        Наша компания использует современное оборудование, которое обеспечивает высокое качество в выполнении поставленных задач.
                    </div>
                </div>
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={tech}></img>
                        </div>
                        <div>
                            <span>
                                Экономия
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        Использование беспилотных технологий экономит вам много времени и денег. За счет отсутствия технологической колеи сохраняется до 6% урожая. Снижение расхода препаратов до 30%
                    </div>
                    <img className='OurAdvantages-img-group' src={group}></img>
                </div>
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={services}></img>
                        </div>
                        <div>
                            <span>
                                Оперативность
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        За рабочую смену наши специалисты способны защитить более 1000 гектар ваших полей, кустарников и деревьев.
                    </div>
                </div>
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={drone}></img>
                        </div>
                        <div>
                            <span>
                                Собственное производство
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        Мы разрабатываем и производим беспилотные летательные аппараты, поэтому знаем все тонкости их работы и можем настроить их под конкретные задачи и потребности клиентов.
                    </div>
                </div>
                <div className='OurAdvantages-grid-block'>
                    <div className='OurAdvantages-flex'>
                        <div>
                            <img src={serviceses}></img>
                        </div>
                        <div>
                            <span>
                                Свой сервис
                            </span>
                        </div>
                    </div>
                    <div className='OurAdvantages-p'>
                        Любой наш аппарат можно сдать на плановое техническое обслуживание или же в ремонт в наш собственный сервис,
                        который гарантирует качество и оперативность выполнения работ.
                    </div>
                </div>
            </div>
        </div>
    )
}