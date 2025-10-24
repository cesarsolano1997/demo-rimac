import { View, Text, Dimensions, StyleSheet, ImageSourcePropType, Animated, ScrollView } from 'react-native';
import React, { FC, useMemo, useState } from 'react'
import CardPlans from '../../../../components/molecules/CardPlans'
import images from '../../../../assets/images'
import CustomButton from '../../../../components/atoms/Button'
import usePlanContext from '../../context/Plans.contex'
import CardPlansExplication from '../../../../components/molecules/CardPlansExplication'

type Props = {
  onNextStep: () => void
}
interface Item
{
  key: string
  title: string
  description: string
  image: ImageSourcePropType
  selected: boolean
}

const windowWidth = Dimensions.get("screen").width
const Step1: FC<Props> = ({ onNextStep }) =>
{

  const { plans , user,setPlanSelected } = usePlanContext()

  const [items, setItems] = useState<Item[]>([{
    key: 'option-1',
    title: 'Para mí',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    image: images.protectionLight,
    selected: false
  }, {
    key: 'option-2',
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier cosa.',
    image: images.addUserLight,
    selected: false
  }])

  const oneItemSelected = useMemo(() =>
  {
    return items.some(x => x.selected === true)
  }, [items])

  const handleCardPress = (selectedKey: string) =>
  {
    setItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        selected: item.key === selectedKey,
      }))
    );
  };

  return (
    <View style={{ width: windowWidth, paddingRight: 30 }}>

      <Text style={styles.title}>{user?.name} ¿Para quién deseas cotizar?</Text>
      <Text style={styles.subTitle}>Selecciona la opción que se ajuste más a tus necesidades.</Text>
      <View style={{
        gap: 30,
        marginBottom: 80,
        marginTop: 20
      }}>
        {
          items.map(item =>
          {
            return <CardPlans
              key={item.key}
              title={item.title}
              description={item.description}
              image={item.image}
              selected={item.selected}
              onPress={() =>
              {
                handleCardPress(item.key)
              }}
            />
          })
        }
      </View>
      {
        oneItemSelected &&
        <ScrollView
          horizontal
        >
          {
            plans.map((item, index) => (
              <CardPlansExplication
                key={`key-${index}`}
                title={item.name}
                amountPlan={item.price}
                descriptions={item.description}
                onPress={() => {
                  setPlanSelected(item)
                  onNextStep()
                }}
              />
            ))
          }
        </ScrollView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 400
  }
})

export default Step1