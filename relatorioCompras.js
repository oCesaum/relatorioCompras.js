const relatorio = [
	{
		cliente:'Joao',
		compras:[
			{
				data:'2022-10-01',
				produtos:{
					'limpeza':[
						{
							nome:'sabao',
							quantidade:2,
							valor_unitario:10
						},
						{
							nome:'amaciante',
							quantidade:1,
							valor_unitario:5
						}
					],
					'alimentacao':[
						{
							nome:'arroz',
							quantidade:2,
							valor_unitario:6
						},
						{
							nome:'feijao',
							quantidade:3,
							valor_unitario:8
						}
					]
					
				},
				desconto:'10%'
			},
			{
				data:'2022-10-08',
				produtos:{
					'bebidas':[
						{
							nome:'cerveja',
							quantidade:10,
							valor_unitario:5
						},
						{
							nome:'refrigerante',
							quantidade:1,
							valor_unitario:3.4
						}
					]
				},
			}
		]
	},
	{
		cliente:'Maria',
		compras:[
			{
				data:'2022-10-01',
				produtos:{
					'limpeza':[
						{
							nome:'sabao',
							quantidade:2,
							valor_unitario:10
						},
						{
							nome:'qboa',
							quantidade:"1",
							valor_unitario:"2.5"
						}
					],
					'alimentacao':[
						{
							nome:'arroz',
							quantidade:"2",
							valor_unitario:"6"
						},
						{
							nome:'biscoito',
							quantidade:"3",
							valor_unitario:"3.5"
						}
					]
				},
				desconto:'5%'
			}
		]
	}
]
// console.log(relatorio[0].compras[1].desconto)

let valorTotal = 0
let compras = []
let categorias = []
let valorCategoria = 0
let valorData = 0
let valorCliente = 0

for (const clientes of relatorio ) {
  for (const compra of clientes.compras) {
    compras.push(compra)
    for (const categoria in compra.produtos) {
      if (!categorias.includes(categoria)) {
        categorias.push(categoria)
      }
    }
  }
}

// obs: desconto é aplicado sobre o valor total de cada compra
// criar as seguintes funções:

// 1. calcular o valor total de faturamento (soma de tudo)
function somaTotal(){
  for (const categoria of categorias) {
    for (const clientes of relatorio ) {
      for (const compras of clientes.compras) {
        if (compras.desconto) {
          if (compras.produtos[categoria]) {
            for (const item of compras.produtos[`${categoria}`]) {
              const desconto = parseFloat(compras.desconto)
              valorTotal += ((item.valor_unitario * item.quantidade) - (item.valor_unitario * item.quantidade) * (desconto) / 100)
            }
          }
        } else {
          if (compras.produtos[categoria]) {
            for (const item of compras.produtos[`${categoria}`]) {
              valorTotal += (item.valor_unitario * item.quantidade)
            }
          }
        }
      }
    }
  }
  console.log(`Valor total = R$` + valorTotal.toFixed(2))
}
// somaTotal()

// 2. calcular o valor total gasto por cada cliente
function somaPorCliente(name){
  for (const categoria of categorias) {
    for (const clientes of relatorio ) {
      if (clientes.cliente.includes(name)) {
        for (const compras of clientes.compras) {
          if (compras.desconto) {
            if (compras.produtos[categoria]) {
              for (const item of compras.produtos[`${categoria}`]) {
                const desconto = parseFloat(compras.desconto)
                valorCliente += ((item.valor_unitario * item.quantidade) - (item.valor_unitario * item.quantidade) * (desconto) / 100)
              }
            }
          } else {
            if (compras.produtos[categoria]) {
              for (const item of compras.produtos[`${categoria}`]) {
                valorCliente += (item.valor_unitario * item.quantidade)
              }
            }
          }
        }
      }
    }
  }
  console.log(valorCliente.toFixed(2))
}
// somaPorCliente("Maria")

// 3. calcular o faturamento total de cada dia
function somaPorDia(data){
  for (const categoria of categorias) {
    for (const clientes of relatorio ) {
      for (const compras of clientes.compras) {
        if (compras.desconto && compras.data === data) {
          if (compras.produtos[categoria]) {
            for (const item of compras.produtos[`${categoria}`]) {
              const desconto = parseFloat(compras.desconto)
              valorData += ((item.valor_unitario * item.quantidade) - (item.valor_unitario * item.quantidade) * (desconto) / 100)
            }
          }
        } else if (compras.data === data) {
          if (compras.produtos[categoria]) {
            for (const item of compras.produtos[`${categoria}`]) {
              valorData += (item.valor_unitario * item.quantidade)
            }
          }
        }
      }
    }
  }
  console.log(valorData.toFixed(2))
}
somaPorDia("2022-10-01")

// 4. calcular o valor total de vendas da categoria (sem considerar desconto)
function somaPorCategoria(categoria){
  for (var x = 0; x < compras.length; x++) {
    if (compras[x].produtos[`${categoria}`]) {
      for (const item of compras[x].produtos[`${categoria}`]) {
        valorCategoria += (item.valor_unitario * item.quantidade)
      }
    }
  }
  console.log(`Valor de ${categoria} = R$` + valorCategoria)
}
// somaPorCategoria("bebidas")