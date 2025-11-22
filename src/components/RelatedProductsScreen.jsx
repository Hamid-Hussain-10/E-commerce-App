import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const RelatedProductsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const allProducts = await res.json();

        const filtered = allProducts.filter(
          item => item.category === product.category && item.id !== product.id,
        );

        setRelated(filtered);
      } catch (err) {
        console.log('Error loading related', err);
      }
    };

    fetchRelated();
  }, [product]);

  return (
    <ScrollView style={styles.container}>
      {/* Product showcase */}
      <View style={styles.heroCard}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: product.image }} style={styles.mainImage} />
        </View>

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>$ {product.price}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.ratingValue}>{product.rating?.rate}</Text>
          <Text style={styles.ratingCount}>
            ({product.rating?.count} reviews)
          </Text>
        </View>

        <Text style={styles.description}>
          {product.description.length > 150
            ? product.description.substring(0, 150) + '...'
            : product.description}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>You may also like</Text>

      {/* Related products */}
      <View style={styles.relatedGrid}>
        {related.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.push('RelatedProducts', { product: item })
            }
            style={styles.relatedCard}
          >
            <Image source={{ uri: item.image }} style={styles.relatedImage} />

            <Text style={styles.relatedName} numberOfLines={1}>
              {item.title}
            </Text>

            <Text style={styles.relatedPrice}>$ {item.price}</Text>

            <View style={styles.relatedRatingRow}>
              <Text style={styles.relatedStar}>★</Text>
              <Text style={styles.relatedRating}>{item.rating?.rate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default RelatedProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1419',
    paddingTop: 26,
    paddingHorizontal: 16,
  },

  heroCard: {
    backgroundColor: '#1A2026',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',

  },
  mainImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },
  price: {
    color: '#F5B800',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  star: {
    color: '#F5B800',
    fontSize: 20,
  },
  ratingValue: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 6,
  },
  ratingCount: {
    color: '#9CA3AF',
    marginLeft: 6,
  },
  description: {
    color: '#C5C9CE',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
    lineHeight: 20,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 10,
  },

  relatedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },

  relatedCard: {
    backgroundColor: '#1A2026',
    width: '48%',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  relatedImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  relatedName: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  relatedPrice: {
    color: '#F5B800',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  relatedRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  relatedStar: {
    color: '#F5B800',
    fontSize: 16,
  },
  relatedRating: {
    color: '#fff',
    marginLeft: 4,
  },
});
