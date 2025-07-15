import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const opportunities = [
  { id: 1, company: 'TechStart Inc', value: 'R$ 25.000', stage: 'Proposta', probability: 75 },
  { id: 2, company: 'DevCorp', value: 'R$ 15.000', stage: 'Negociação', probability: 50 },
  { id: 3, company: 'InnovateLab', value: 'R$ 35.000', stage: 'Qualificação', probability: 25 }
]

export default function CRM() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">CRM</h2>
        <p className="text-muted-foreground">Pipeline de vendas e oportunidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Qualificação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 35.000</p>
            <p className="text-sm text-muted-foreground">1 oportunidade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Negociação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 15.000</p>
            <p className="text-sm text-muted-foreground">1 oportunidade</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Proposta</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 25.000</p>
            <p className="text-sm text-muted-foreground">1 oportunidade</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Oportunidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div key={opp.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{opp.company}</h3>
                  <p className="text-sm text-muted-foreground">{opp.value}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{opp.stage}</Badge>
                  <span className="text-sm">{opp.probability}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

