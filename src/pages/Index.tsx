import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-brutal-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-oswald font-bold text-brutal-red">
                ЕВГЕНИЙ БАКУРСКИЙ
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#hero" className="text-white hover:text-brutal-red transition-colors">ГЛАВНАЯ</a>
                <a href="#about" className="text-white hover:text-brutal-red transition-colors">О МАСТЕРЕ</a>
                <a href="#portfolio" className="text-white hover:text-brutal-red transition-colors">РАБОТЫ</a>
                <a href="#reviews" className="text-white hover:text-brutal-red transition-colors">ОТЗЫВЫ</a>
                <a href="#studios" className="text-white hover:text-brutal-red transition-colors">СТУДИИ</a>
                <a href="#contact" className="text-white hover:text-brutal-red transition-colors">КОНТАКТЫ</a>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-brutal-gray">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/dc555549-d948-40b7-99ac-adb3ea4103ae.jpg')`
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-oswald font-black text-white mb-4 animate-fade-in">
            ЕВГЕНИЙ
            <span className="text-brutal-red block">БАКУРСКИЙ</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in">
            ТАТУ МАСТЕР С 10-ЛЕТНИМ СТАЖЕМ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button className="bg-brutal-red hover:bg-brutal-darkred text-white px-8 py-3 text-lg font-oswald">
              ЗАПИСАТЬСЯ НА СЕАНС
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-oswald">
              ПОСМОТРЕТЬ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brutal-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4">
              О <span className="text-brutal-red">МАСТЕРЕ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-oswald font-bold mb-6 text-brutal-red">
                ПРОФЕССИОНАЛЬНЫЙ ПУТЬ
              </h3>
              <p className="text-lg mb-6 text-gray-300">
                Работаю в сфере татуировки с мая 2014 года. За более чем 10 лет создал множество уникальных работ, каждая из которых отражает индивидуальность клиента.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Специализируюсь на черно-белом реализме, биомеханике и декоративных орнаментах. Постоянно совершенствую технику и изучаю новые направления.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-brutal-red">10+</div>
                  <div className="text-sm text-gray-400">ЛЕТ ОПЫТА</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-brutal-red">1000+</div>
                  <div className="text-sm text-gray-400">РАБОТ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-brutal-red">2</div>
                  <div className="text-sm text-gray-400">ГОРОДА</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="border-4 border-brutal-red">
                <img 
                  src="/img/dc555549-d948-40b7-99ac-adb3ea4103ae.jpg"
                  alt="Евгений Бакурский"
                  className="w-full h-96 object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4">
              МОИ <span className="text-brutal-red">РАБОТЫ</span>
            </h2>
            <p className="text-lg text-gray-400">
              Каждая татуировка — это уникальное произведение искусства
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              { 
                image: "/img/91c08427-cc0b-4bff-91ed-1a60333b370f.jpg",
                category: "РЕАЛИЗМ",
                title: "Портрет в стиле реализм"
              },
              { 
                image: "/img/106cbc64-e1f1-42b6-902c-df12439fe018.jpg",
                category: "БИОМЕХАНИКА",
                title: "Механический дизайн"
              },
              { 
                image: "/img/50d09271-26d7-4da3-bde1-b6b73847a522.jpg",
                category: "ОРНАМЕНТЫ",
                title: "Декоративные узоры"
              },
              { 
                image: "/img/8beb2fe0-b986-4de7-88cc-adfd4b16ec13.jpg",
                category: "TRADITIONAL",
                title: "Традиционный стиль"
              },
              { 
                image: "/img/7435189f-8206-46b4-9f6f-19e1fe8b4230.jpg",
                category: "NEO-TRADITIONAL",
                title: "Нео-традиционный стиль"
              },
              { 
                image: "/img/91c08427-cc0b-4bff-91ed-1a60333b370f.jpg",
                category: "BLACKWORK",
                title: "Черная графика"
              }
            ].map((work, index) => (
              <Card key={index} className="bg-brutal-darkgray border-brutal-darkgray hover:border-brutal-red transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <Icon name="Eye" className="w-4 h-4 mr-2" />
                        Посмотреть
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-brutal-red font-oswald mb-2">{work.category}</div>
                    <h3 className="text-lg font-oswald font-bold text-white">{work.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-brutal-red hover:bg-brutal-darkred text-white px-8 py-3 text-lg font-oswald">
              ПОСМОТРЕТЬ ВСЕ РАБОТЫ
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-brutal-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4">
              <span className="text-brutal-red">ОТЗЫВЫ</span> КЛИЕНТОВ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Александр К.",
                text: "Евгений - настоящий профессионал! Качество работы на высшем уровне. Татуировка зажила идеально, все рекомендации были четко объяснены.",
                rating: 5
              },
              {
                name: "Марина С.",
                text: "Делала у Евгения большую работу на спине. Результат превзошел все ожидания! Мастер с большой буквы, рекомендую всем.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-brutal-darkgray border-brutal-darkgray">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-brutal-red">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                  <div className="text-white font-oswald font-bold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Studios Section */}
      <section id="studios" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4">
              НАШИ <span className="text-brutal-red">СТУДИИ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                city: "АНАПА",
                address: "ул. Крымская, 15",
                phone: "+7-918-47-57-183",
                hours: "10:00 - 22:00"
              },
              {
                city: "БЕЛГОРОД",
                address: "ул. Победы, 28",
                phone: "+7-918-47-57-183",
                hours: "10:00 - 22:00"
              }
            ].map((studio, index) => (
              <Card key={index} className="bg-brutal-darkgray border-brutal-darkgray hover:border-brutal-red transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-oswald font-bold text-brutal-red mb-6">{studio.city}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <Icon name="MapPin" className="w-5 h-5 mr-3 text-brutal-red" />
                      {studio.address}
                    </div>
                    <div className="flex items-center text-white">
                      <Icon name="Phone" className="w-5 h-5 mr-3 text-brutal-red" />
                      {studio.phone}
                    </div>
                    <div className="flex items-center text-white">
                      <Icon name="Clock" className="w-5 h-5 mr-3 text-brutal-red" />
                      {studio.hours}
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-brutal-red hover:bg-brutal-darkred text-white font-oswald">
                    ЗАПИСАТЬСЯ В {studio.city}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brutal-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4">
              <span className="text-brutal-red">СВЯЗАТЬСЯ</span> СО МНОЙ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-6">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Icon name="Phone" className="w-5 h-5 mr-3 text-brutal-red" />
                  +7-918-47-57-183
                </div>
                <div className="flex items-center text-white">
                  <Icon name="Mail" className="w-5 h-5 mr-3 text-brutal-red" />
                  evgeny.bakursky@tattoo.com
                </div>
                <div className="flex items-center text-white">
                  <Icon name="Instagram" className="w-5 h-5 mr-3 text-brutal-red" />
                  @bakursky_tattoo
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-oswald font-bold text-white mb-6">ЗАПИСАТЬСЯ НА СЕАНС</h3>
              <div className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  className="bg-brutal-darkgray border-brutal-darkgray text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Телефон"
                  className="bg-brutal-darkgray border-brutal-darkgray text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Опишите желаемую татуировку"
                  rows={4}
                  className="bg-brutal-darkgray border-brutal-darkgray text-white placeholder-gray-400"
                />
                <Button className="w-full bg-brutal-red hover:bg-brutal-darkred text-white font-oswald py-3">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-brutal-darkgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-oswald font-bold text-brutal-red mb-4">
              ЕВГЕНИЙ БАКУРСКИЙ
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональный тату мастер с 2014 года
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;