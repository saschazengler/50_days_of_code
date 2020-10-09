#!/bin/sh

userPoints=0

echo 'Sanft & Sorgfältig Quiz'

sleep 2s

echo 'Wir sind Oli & Jan. Wie ist dein Name?'

read username

echo 'Hallo,' $username'.'

echo 'Für jede richtige Frage gibt es 10 Punkte.'

echo 'Lass uns anfangen. Hier kommt die erste Frage. Benutze die entsprechende Zahl für deine Antwort.'

sleep 5s

echo 'Welches Tier wollte Oli auf ein Skateboard schrauben?'

options=('Hamster' 'Meerschweinchen' 'Igel')

select opt in "${options[@]}"

do
case $opt in
	"Hamster")
		echo "Das ist leider falsch. Versuche es noch mal."
		;;
	"Meerschweinchen")
		echo "Meerschweinchen ist richtig."
		userPoints=$(( $userPoints + 10 ))
		break
		;;
	"Igel")
		echo "Sorry, aber ein Igel war es bestimmt nicht."
		;;
	esac
done

echo "Dein Punktestand lautet" $userPoints"."

echo "Weiter geht es mit der nächsten Frage."

sleep 3s

echo "Um welches Tier handelt es sich in Oli's Geschichte mit Berti und Fauli?"

options=("Wickeltier" "Streicheltier" "Kuscheltier")

select opt in "${options[@]}"

do
case $opt in
	"Wickeltier")
		echo "Richtige Antwort. Weitere 10 Punkte für dich."
		userPoints=$(( $userPoints + 10 ))
		break
		;;
	"Streicheltier")
		echo "Das ist leider die falsche Antwort."
		;;
	"Kuscheltier")
		echo "Es war definitiv kein Kuscheltier."
		;;
	esac
done

echo "Dein aktueller Punktestand lautet" $userPoints"."
