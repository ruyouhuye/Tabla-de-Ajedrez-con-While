var createChessTable = function(rows,cols){
	var table = '<table>'
	var bn = true;//para saber si es blanco o negro
	var i = 0;
	var j = 0;

	while(i<rows){
		table+='<tr>';
		if (i%2==0){
			bn = true;//empieza en blanco
		}
		else{//empieza en negro
			bn = false;
		}
		while(j<cols){
			if (bn){
				classBn = 'white';
			}
			else{
				classBn = 'black';
			}
			table+='<td class="'+classBn+'">';
			table+=i + '-' + j;
			table+='</td>';
			bn = !bn;
			j++;
		}
		table+='</tr>';
		i++;
		j=0;
	}
	table+= '</table>';
	return table;
}

chessTable = createChessTable(8,8);//(rows,cols)

document.getElementById('container').innerHTML = chessTable;