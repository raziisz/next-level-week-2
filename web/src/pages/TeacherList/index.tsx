import React from 'react';


import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este são os proffys disponíveis">
                <form action="" id="search-teachers">
                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                    { value: 'Artes', label: 'Artes'},
                    { value: 'Biologia', label: 'Biologia'},
                    { value: 'Ciências', label: 'Ciências'},
                    { value: 'Educação Física', label: 'Educação Física'},
                    { value: 'Geografia', label: 'Geografia'},
                    { value: 'Matemática', label: 'Matemática'},
                    { value: 'Português', label: 'Português'},
                    { value: 'Química', label: 'Química'},
                    { value: 'Sociologia', label: 'Sociologia'},
                    { value: 'Filosofia', label: 'Filosofia'},
                    { value: 'Física', label: 'Física'},
                    { value: 'Língua Inglesa', label: 'Língua Inglesa'},
                    ]}
                />
                <Select 
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                    { value: '0', label: 'Domigo'},
                    { value: '1', label: 'Senguda-feira'},
                    { value: '2', label: 'Terça-feira'},
                    { value: '3', label: 'Quarta-feira'},
                    { value: '4', label: 'Quinta-feira'},
                    { value: '5', label: 'Sexta-feira'},
                    { value: '6', label: 'Sábado'},
                    ]}
                />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;