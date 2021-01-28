import React from "react";
import intl from 'react-intl-universal';

import { VictoryPie, VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis, VictoryGroup, VictoryBar, VictoryLegend } from "victory";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';

import { TextAgile } from '../components/TextAgile';

export const PanelPage = () => {
    
    return (
        <Container>
            <TextAgile phrase={intl.get("phrase.tips-2")}></TextAgile>
            <div className="panel">
                <Card className="card-content">
                    <CardHeader title="Tribos" />
                    <CardContent>
                        <span className="card-content">3</span>
                    </CardContent>
                </Card>
                <Card className="card-content">
                    <CardHeader title="Squads" />
                    <CardContent>
                        <span className="card-content">13</span>
                    </CardContent>
                </Card>
                <Card className="card-content">
                    <CardHeader title="Crafters" />
                    <CardContent>
                        <span className="card-content">87</span>
                    </CardContent>
                </Card>
                <Card className="card-chart">
                    <CardHeader title="Check de Execução" />
                    <CardContent className="card-chart-content">
                        <VictoryChart polar theme={VictoryTheme.material} padding={0} height={400}>
                            <VictoryArea
                             style={{ data: { fill: "tomato"} }}
                                data={[
                                    { x: "WIP", y: 5 },
                                    { x: "Validação em Dupla", y: 1 },
                                    { x: "Testes Automatizados", y: 2 },
                                    { x: "SonarQube", y: 1 },
                                    { x: "Roteiro de Testes", y: 3 },
                                    { x: "Ritos UX", y: 5 },
                                    { x: "Risco Estória", y: 5 },
                                    { x: "Revisão Código", y: 5 },
                                    { x: "Reunião Diária", y: 2.4 },
                                    { x: "Reunião Estória", y: 4.2 },
                                    { x: "OKRs", y: 4.3 },
                                    { x: "Gromming", y: 3 },
                                    { x: "Gestão a Vista", y: 4 },
                                    { x: "Checklist Estória", y: 2.3 },
                                    { x: "Burndown", y: 2 }
                                ]}/>
                            <VictoryPolarAxis labelPlacement="vertical"
                                style={{
                                    tickLabels: {fontSize: 20, padding: 10}
                                }}
                            />
                        </VictoryChart>
                    </CardContent>
                </Card>
                <Card className="card-chart">
                    <CardHeader title="Quantidade de Ações por Responsabilidade" />
                    <CardContent className="card-chart-content">
                        <VictoryPie
                            colorScale={["#8aff86", "#86c8ff", "#ffff86" ]}
                            labelRadius={60}
                            padding={0}
                            style={{ labels: { fill: "#353535", fontSize: 35, fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" } }}
                            data={[
                                { x: "  dti  \n  35%", y: 35 },
                                { x: " squad \n  40%", y: 40 },
                                { x: "cliente\n  55%", y: 55 }
                            ]}
                        />
                    </CardContent>
                </Card>
                <Card className="card-chart">
                    <CardHeader title="Resultado CE" />
                    <CardContent className="card-chart-content">
                        <VictoryChart>
                            <VictoryLegend x={25} y={0}
                                centerTitle
                                orientation="horizontal"
                                gutter={20}
                                padding={0}
                                style={{ border: { stroke: "black" }, title: {fontSize: 15 } }}
                                data={[
                                    { name: "Contrato Digital", symbol: { fill: "#334d5c" } },
                                    { name: "Gerador Proposta", symbol: { fill: "#45b29d" } },
                                    { name: "Microsserviços", symbol: { fill: "#efc94c" } }
                                ]}
                            />
                            <VictoryGroup offset={20} colorScale={"qualitative"}>
                                <VictoryBar
                                    data={[{ x: "refazer", y: 3 }, { x: "cancelado", y: 2 }, { x: "completo", y: 5 }]}
                                />
                                <VictoryBar
                                    data={[{ x: "refazer", y: 2 }, { x: "cancelado", y: 1 }, { x: "completo", y: 5 }]}
                                />
                                <VictoryBar
                                    data={[{ x: "refazer", y: 1 }, { x: "cancelado", y: 0 }, { x: "completo", y: 4 }]}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
};