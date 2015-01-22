var m_canvasLogo = null;
var m_contexteCanvasLogo = null;
var m_canvasCouleurs = null;
var m_contexteCanvasCouleurs = null;
var m_rougeLogo = null;
var m_vertLogo = null;
var m_bleuLogo = null;
var m_alphaLogo = null;

function Initialisation()
{
	m_canvasLogo = document.getElementById("CanvasLogo");
	if (m_canvasLogo.getContext)
	{
		m_contexteCanvasLogo = m_canvasLogo.getContext("2d");
		DessinLogo();
	}

	m_canvasCouleurs = document.getElementById("CanvasCouleurs");
	if (m_canvasCouleurs.getContext)
	{
		m_contexteCanvasCouleurs = m_canvasCouleurs.getContext("2d");
		DessinChoixCouleur();
	}
}

function DessinChoixCouleur()
{
	if (!CanvasValide(m_canvasCouleurs, m_contexteCanvasCouleurs))
	{
		return;
	}

	//// Autre méthode pour abonner le canvas sur l'évènement de déplacement de la souris
	//// selon la présence de la fonction "addEventListener" ou "attachEvent"
	////
	//if (m_canvasCouleurs.addEventListener)
	//{
	//	m_canvasCouleurs.addEventListener("mousemove", CanvasCouleur_MouseMove, false);
	//}
	//else if (m_canvasCouleurs.attachEvent)
	//{
	//	m_canvasCouleurs.attachEvent("onmousemove", CanvasCouleur_MouseMove);
	//}

	var _alpha = 1;

	for (j = 0; j < 1; j++)
	{
		// Initial values for color
		var _rouge = 255, _vert = 0, _bleu = 0;

		// Fill row with colors
		for (i = 0; i < 150; i++)
		{
			// Yellow - increase G
			if (i < 25)
				_vert += 10.2;

			// Green - decrease R
			else if (i >= 25 && i < 50)
				_rouge -= 10.2;

			// Blue - increase B, decrease G
			else if (i >= 50 && i < 75)
			{
				_vert -= 10.2;
				_bleu += 10.2;
			}

			// Purple - increase B, decrease G
			else if (i >= 75 && i < 100)
				_rouge += 10.2;

			// Red - decrease B
			else
				_bleu -= 10.2;

			// Draw rect
			m_contexteCanvasCouleurs.fillStyle = "rgba(" + Math.floor(_rouge) + "," +
												 Math.floor(_vert) + "," +
												 Math.floor(_bleu) + "," + _alpha + ")";
			//m_contextCanvasCouleurs.fillRect(3 * i, 5 * j, 3, 5);
			m_contexteCanvasCouleurs.fillRect(3 * i, 5 * j, 3, m_canvasCouleurs.height);
		}
	}
}

function CanvasValide(objCanvas, objContext)
{
	return objCanvas && objCanvas.getContext && objContext;
}

function DessinLogo()
{
	if (!CanvasValide(m_canvasLogo, m_contexteCanvasLogo))
	{
		return;
	}

	var _rougeFillStyle = 27;
	var _vertFillStyle = 49;
	var _bleuFillStyle = 146;
	var _alphaFillStyle = 255;

	var _rougeStrokeStyle = 87;
	var _vertStrokeStyle = 136;
	var _bleuStrokeStyle = 183;
	var _alphaStrokeStyle = 255;

	// si le rouge est définit on l'utilise
	if (m_rougeLogo !== null)
	{
		_rougeFillStyle = _rougeStrokeStyle = m_rougeLogo;
	}

	// si le vert est définit on l'utilise
	if (m_vertLogo !== null)
	{
		_vertFillStyle = _vertStrokeStyle = m_vertLogo;
	}

	// si le bleu est définit on l'utilise
	if (m_bleuLogo !== null)
	{
		_bleuFillStyle = _bleuStrokeStyle = m_bleuLogo;
	}

	// si alpha est définit on l'utilise
	if (m_alphaLogo !== null)
	{
		_alphaFillStyle = _alphaStrokeStyle = m_alphaLogo;
	}

	var _canauxFillStyle = [_rougeFillStyle, _vertFillStyle, _bleuFillStyle, _alphaFillStyle];
	var _canauxStrokeStyle = [_rougeStrokeStyle, _vertStrokeStyle, _bleuStrokeStyle, _alphaStrokeStyle];

	// définition des couleurs
	m_contexteCanvasLogo.fillStyle = "rgba({0})".replace("{0}", _canauxFillStyle.join());
	m_contexteCanvasLogo.strokeStyle = "rgba({0})".replace("{0}", _canauxStrokeStyle.join());

	// nettoyage de la surface de dessin
	m_contexteCanvasLogo.clearRect(0, 0, m_canvasLogo.width, m_canvasLogo.height);

	// cercle extérieur du logo
	m_contexteCanvasLogo.beginPath();
	m_contexteCanvasLogo.arc(65, 65, 64, 0, 2 * Math.PI);
	m_contexteCanvasLogo.stroke();

	// vague intérieure
	// partie haute
	m_contexteCanvasLogo.beginPath();
	m_contexteCanvasLogo.arc(65, 33, 32, 0.5 * Math.PI, 1.48 * Math.PI);
	m_contexteCanvasLogo.stroke();

	// partie basse
	m_contexteCanvasLogo.beginPath();
	m_contexteCanvasLogo.arc(65, 97, 32, 0.48 * Math.PI, 1.5 * Math.PI, true);
	m_contexteCanvasLogo.stroke();

	// changement de couleur pour les tracés
	m_contexteCanvasLogo.strokeStyle = m_contexteCanvasLogo.fillStyle;

	// dessin du texte
	var _strTexte = "YPCI";
	m_contexteCanvasLogo.font = "bold 50px Arial";
	m_contexteCanvasLogo.textAlign = "center";
	m_contexteCanvasLogo.textBaseline = "middle";
	m_contexteCanvasLogo.fillText(_strTexte, 65, 63);

	// dessin cable
	m_contexteCanvasLogo.beginPath();
	// point départ cable
	m_contexteCanvasLogo.moveTo(8, 84);
	// haut du cable
	m_contexteCanvasLogo.lineTo(103, 84);

	// début prise
	m_contexteCanvasLogo.lineTo(106, 82 + .5);
	m_contexteCanvasLogo.lineTo(112, 82 + .5);
	m_contexteCanvasLogo.lineTo(115, 83);
	m_contexteCanvasLogo.lineTo(115, 83);

	m_contexteCanvasLogo.lineTo(123, 82);
	m_contexteCanvasLogo.lineTo(114, 82);
	m_contexteCanvasLogo.lineTo(114, 81);
	m_contexteCanvasLogo.lineTo(123, 82);

	m_contexteCanvasLogo.lineTo(123, 87);
	m_contexteCanvasLogo.lineTo(115, 87);
	m_contexteCanvasLogo.lineTo(115, 88 - .5);
	m_contexteCanvasLogo.lineTo(106, 88 - .5);

	// bas du cable
	m_contexteCanvasLogo.lineTo(103, 86);
	m_contexteCanvasLogo.lineTo(8, 86);

	m_contexteCanvasLogo.closePath();
	m_contexteCanvasLogo.fill();
}

function CanvasCouleur_MouseMove(e)
{
	if (typeof e === 'undefined' && m_contexteCanvasCouleurs)
	{
		e = m_contexteCanvasCouleurs.event;
	}
	if (typeof e.offsetX !== 'undefined' && typeof e.offsetY !== 'undefined')
	{
		_currentX = e.offsetX;
		_currentY = e.offsetY;
	}
	else
	{
		var _relPos = getRelativePos(e.clientX, e.clientY, m_canvasCouleurs);
		_currentX = _relPos[0];
		_currentY = _relPos[1];
	}

	if (m_contexteCanvasCouleurs && m_contexteCanvasCouleurs.getImageData)
	{
		var _imgData = m_contexteCanvasCouleurs.getImageData(_currentX, _currentY, 1, 1);
		if (_imgData)
		{
			m_rougeLogo = Math.floor(_imgData.data[0]);
			m_vertLogo = Math.floor(_imgData.data[1]);
			m_bleuLogo = Math.floor(_imgData.data[2]);
			m_alphaLogo = _imgData.data[3];

			document.getElementById('couleurSelectionnee').innerHTML = "Couleur selectionnee : rgba(" + m_rougeLogo + ", "
																	   + m_vertLogo + ", "
																	   + m_bleuLogo + ", "
																	   + m_alphaLogo + ")";
		}
	}
}

// My thanks to QuirksMode.org for the insight here
function getRelativePos(x, y, element)
{
	var _curleft = _curtop = 0;

	if (element.offsetParent)
	{
		do
		{
			_curleft += element.offsetLeft;
			_curtop += element.offsetTop;
		}
		while (element = element.offsetParent);
	}

	// Webkit isn't compliant with CSS OM View here; thus, we need to grab scrollTop from body instead of documentElement

	if (document.body.scrollLeft > 0)
	{
		var _scrollLeft = document.body.scrollLeft;
	}
	else
	{
		_scrollLeft = document.documentElement.scrollLeft;
	}

	if (document.body.scrollTop > 0)
	{
		var _scrollTop = document.body.scrollTop;
	}
	else
	{
		_scrollTop = document.documentElement.scrollTop;
	}

	return [(x - _curleft + _scrollLeft), (y - _curtop + _scrollTop)];
}

function RetablirLogo()
{
	m_rougeLogo = null;
	m_vertLogo = null;
	m_bleuLogo = null;
	DessinLogo();
}